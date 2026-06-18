import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, 'screenshots');

const pages = [
  // Corrected URLs from live nav
  { name: '09-careers-join-the-team', url: 'https://avidrealtypartners.com/join-the-avid-team/' },
  { name: '10-media-think-big', url: 'https://avidrealtypartners.com/think-big/' },
  { name: '11-media-2023-mid-market-outlook', url: 'https://avidrealtypartners.com/report/' },
  { name: '16-media-videos', url: 'https://avidrealtypartners.com/video/' },
  { name: '18-investor-portal', url: 'https://investors.appfolioim.com/avidrealtypartners/investor' },
  { name: '02-about-overview', url: 'https://avidrealtypartners.com/overview/' },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});

async function dismissPopups(page) {
  for (const selector of [
    'button:has-text("Close")',
    '.fusion-modal .close',
    '[aria-label="Close"]',
    '.modal-close',
    '.mfp-close',
  ]) {
    const btn = page.locator(selector).first();
    if (await btn.isVisible({ timeout: 800 }).catch(() => false)) {
      await btn.click().catch(() => {});
      await page.waitForTimeout(400);
    }
  }
}

for (const pageInfo of pages) {
  const page = await context.newPage();
  try {
    await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForTimeout(3000);
    await dismissPopups(page);

    const fullPath = path.join(outputDir, `${pageInfo.name}-full.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved: ${fullPath}`);

    const viewportPath = path.join(outputDir, `${pageInfo.name}-viewport.png`);
    await page.screenshot({ path: viewportPath, fullPage: false });
    console.log(`Saved: ${viewportPath}`);
  } catch (err) {
    console.error(`Failed ${pageInfo.url}:`, err.message);
  } finally {
    await page.close();
  }
}

// Capture open dropdown menus on homepage
const home = await context.newPage();
await home.goto('https://avidrealtypartners.com/', { waitUntil: 'networkidle', timeout: 60000 });
await home.waitForTimeout(2000);
await dismissPopups(home);

const dropdowns = [
  { name: 'nav-dropdown-about', selector: 'li:has(> a:has-text("About"))' },
  { name: 'nav-dropdown-media', selector: 'li:has(> a:has-text("Media"))' },
];

for (const dd of dropdowns) {
  const item = home.locator(dd.selector).first();
  await item.hover();
  await home.waitForTimeout(800);
  const shot = path.join(outputDir, `${dd.name}.png`);
  await home.screenshot({ path: shot, fullPage: false });
  console.log(`Saved: ${shot}`);
}

await home.close();
await browser.close();
console.log('Done.');
