import { chromium } from 'playwright';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, 'screenshots');
const baseUrl = 'https://avidrealtypartners.com/';

// All known pages from site navigation (main + dropdowns)
const pages = [
  // Homepage
  { name: '01-homepage', url: baseUrl },

  // About dropdown
  { name: '02-about-overview', url: `${baseUrl}about/overview/` },
  { name: '03-about-why-avid', url: `${baseUrl}why-avid-realty-partners/` },
  { name: '04-about-investment-approach', url: `${baseUrl}investment-approach/` },
  { name: '05-about-track-record', url: `${baseUrl}track-record/` },
  { name: '06-about-meet-the-team', url: `${baseUrl}meet-the-avid-team/` },

  // Main nav
  { name: '07-investment-opportunities', url: `${baseUrl}investment-opportunities/` },
  { name: '08-portfolio', url: `${baseUrl}portfolio/` },
  { name: '09-careers', url: `${baseUrl}careers/` },

  // Media dropdown
  { name: '10-media-think-big-savvy-investors', url: `${baseUrl}think-big-savvy-investors/` },
  { name: '11-media-2023-mid-market-outlook', url: `${baseUrl}2023-mid-market-outlook/` },
  { name: '12-media-webinar-replay', url: `${baseUrl}webinar-replay/` },
  { name: '13-media-blog', url: `${baseUrl}blog/` },
  { name: '14-media-events', url: `${baseUrl}events/` },
  { name: '15-media-news', url: `${baseUrl}news/` },
  { name: '16-media-videos', url: `${baseUrl}videos/` },

  // Top utility bar + footer
  { name: '17-research', url: `${baseUrl}research/` },
  { name: '18-investor-portal', url: `${baseUrl}investor-portal/` },
  { name: '19-contact-us', url: `${baseUrl}contact-us/` },
  { name: '20-invest-with-us', url: `${baseUrl}invest-with-us/` },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});

const results = [];

async function dismissPopups(page) {
  for (const selector of [
    'button:has-text("Close")',
    '.fusion-modal .close',
    '[aria-label="Close"]',
    '.modal-close',
    '.mfp-close',
    'a.fusion-modal-text-link:has-text("Close")',
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
  const entry = { name: pageInfo.name, url: pageInfo.url, status: 'ok', files: [] };

  try {
    const response = await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2500);
    await dismissPopups(page);

    const status = response?.status() ?? 0;
    if (status >= 400) {
      entry.status = `http-${status}`;
      console.warn(`HTTP ${status}: ${pageInfo.url}`);
    }

    const fullPath = path.join(outputDir, `${pageInfo.name}-full.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    entry.files.push(fullPath);
    console.log(`Saved: ${fullPath}`);

    const viewportPath = path.join(outputDir, `${pageInfo.name}-viewport.png`);
    await page.screenshot({ path: viewportPath, fullPage: false });
    entry.files.push(viewportPath);
    console.log(`Saved: ${viewportPath}`);
  } catch (err) {
    entry.status = `error: ${err.message}`;
    console.error(`Failed ${pageInfo.url}:`, err.message);
  } finally {
    await page.close();
    results.push(entry);
  }
}

// Also scrape live nav links from homepage for anything we missed
const discoverPage = await context.newPage();
try {
  await discoverPage.goto(baseUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await discoverPage.waitForTimeout(2000);
  const links = await discoverPage.$$eval('a[href]', (anchors) =>
    anchors
      .map((a) => a.href)
      .filter((href) => href.includes('avidrealtypartners.com'))
      .filter((href) => !href.includes('#') && !href.includes('mailto:') && !href.includes('tel:'))
  );
  const uniqueLinks = [...new Set(links)].sort();
  await writeFile(
    path.join(outputDir, '_discovered-links.json'),
    JSON.stringify(uniqueLinks, null, 2)
  );
  console.log(`Discovered ${uniqueLinks.length} internal links`);
} finally {
  await discoverPage.close();
}

await browser.close();
await writeFile(path.join(outputDir, '_capture-log.json'), JSON.stringify(results, null, 2));
console.log('Done.');
