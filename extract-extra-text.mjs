import { chromium } from 'playwright';
import { mkdir, writeFile, readFile, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, 'page-text');
const baseUrl = 'https://avidrealtypartners.com/';

const knownPaths = new Set([
  '', 'overview', 'why-avid-realty-partners', 'investment-approach', 'track-record',
  'meet-the-avid-team', 'investment-opportunities', 'portfolio', 'join-the-avid-team',
  'think-big', 'report', 'webinar-replay', 'blog', 'events', 'news', 'video',
  'research', 'contact-us', 'invest-with-us', 'webinar',
]);

function safeSlug(href) {
  const u = new URL(href);
  const parts = u.pathname.replace(/\/$/, '').split('/').filter(Boolean);
  const slug = parts.join('-') || 'index';
  const query = u.search ? u.search.replace(/[?&=]/g, '-').replace(/^-/, '') : '';
  return (slug + (query ? `--${query}` : '')).replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 120);
}

function isBlogPost(href) {
  try {
    const u = new URL(href);
    if (!u.hostname.includes('avidrealtypartners.com')) return false;
    const p = u.pathname.replace(/\/$/, '');
    if (!p || p.includes('/category/') || p.includes('/tag/') || p.includes('/author/')) return false;
    if (p.startsWith('/blog') || p.startsWith('/events') || p.startsWith('/news')) return false;
    if (p.includes('/wp-content/') || p.includes('#')) return false;
    const slug = p.replace(/^\//, '');
    if (knownPaths.has(slug)) return false;
    if (slug.includes('/')) {
      // allow /event/slug only (handled separately)
      return false;
    }
    return slug.length > 3;
  } catch {
    return false;
  }
}

function isEventPage(href) {
  return /avidrealtypartners\.com\/event\/[^/?#]+/.test(href);
}

async function dismissPopups(page) {
  for (const selector of ['button:has-text("Close")', '.fusion-modal .close', '[aria-label="Close"]', '.mfp-close']) {
    const btn = page.locator(selector).first();
    if (await btn.isVisible({ timeout: 800 }).catch(() => false)) {
      await btn.click().catch(() => {});
      await page.waitForTimeout(400);
    }
  }
}

async function extractPageText(page) {
  return page.evaluate(() => {
    function cleanText(text) {
      return String(text || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
    }
    const title = document.title || '';
    const metaDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '';
    const headings = [];
    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((el) => {
      const text = cleanText(el.innerText);
      if (text) headings.push({ level: el.tagName.toLowerCase(), text });
    });
    const imageAlts = [...new Set(
      Array.from(document.querySelectorAll('img[alt]'))
        .map((img) => cleanText(img.getAttribute('alt')))
        .filter(Boolean)
    )];
    return {
      title,
      metaDescription,
      headings,
      imageAlts,
      fullInnerText: cleanText(document.body.innerText),
    };
  });
}

function formatMd(pageInfo, data, status) {
  const lines = [
    `# ${data.title || pageInfo.name}`,
    '',
    `**URL:** ${pageInfo.url}`,
    `**Status:** ${status}`,
    data.metaDescription ? `**Meta description:** ${data.metaDescription}` : '',
    '',
    '---',
    '',
    '## Full page text',
    '',
    data.fullInnerText || '(no text found)',
    '',
    '---',
    '',
    '## Headings',
    '',
    ...(data.headings.length ? data.headings.map((h) => `- **${h.level.toUpperCase()}:** ${h.text}`) : ['(none)']),
    '',
    '## Image alt text',
    '',
    ...(data.imageAlts.length ? data.imageAlts.map((a) => `- ${a}`) : ['(none)']),
  ].filter((l) => l !== '');
  return lines.join('\n');
}

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });

const discovered = new Set();
const blogListUrls = [baseUrl + 'blog/'];
let pageNum = 2;

// Paginate blog
while (true) {
  const listPage = await context.newPage();
  const listUrl = pageNum === 1 ? blogListUrls[0] : `${baseUrl}blog/page/${pageNum}/`;
  try {
    const res = await listPage.goto(listUrl, { waitUntil: 'networkidle', timeout: 60000 });
    if (!res || res.status() >= 400) break;
    await dismissPopups(listPage);
    const hrefs = await listPage.locator('a[href]').evaluateAll((as) => as.map((a) => a.href));
    const posts = hrefs.filter(isBlogPost);
    if (!posts.length && pageNum > 1) break;
    posts.forEach((h) => discovered.add(h.split('#')[0]));
    const hasNext = hrefs.some((h) => h.includes(`/blog/page/${pageNum + 1}`));
    if (!hasNext && pageNum > 1) break;
    pageNum++;
    if (pageNum > 50) break;
  } catch {
    break;
  } finally {
    await listPage.close();
  }
}

// Events + footer extras
const seedPage = await context.newPage();
await seedPage.goto(baseUrl, { waitUntil: 'networkidle' });
await dismissPopups(seedPage);
const allLinks = await seedPage.locator('a[href]').evaluateAll((as) => as.map((a) => a.href));
await seedPage.goto(`${baseUrl}events/`, { waitUntil: 'networkidle' });
const eventLinks = await seedPage.locator('a[href]').evaluateAll((as) => as.map((a) => a.href));
allLinks.push(...eventLinks);
await seedPage.close();

for (const href of allLinks) {
  const clean = href.split('#')[0];
  if (isBlogPost(clean)) discovered.add(clean);
  if (isEventPage(clean)) discovered.add(clean);
  if (/\/privacy-policy\/?$|\/terms/.test(clean)) discovered.add(clean);
}

// Explicit extras
['privacy-policy', 'terms-conditions', 'webinar'].forEach((slug) => {
  discovered.add(`${baseUrl}${slug}/`);
});

const extraPages = [...discovered].map((url) => ({
  name: `extra__${safeSlug(url)}`,
  url,
}));

console.log(`Found ${extraPages.length} additional pages (blog posts, events, legal, etc.)`);

const newResults = [];
for (const pageInfo of extraPages) {
  const page = await context.newPage();
  try {
    const waitUntil = pageInfo.url.includes('appfolioim') ? 'domcontentloaded' : 'networkidle';
    const response = await page.goto(pageInfo.url, { waitUntil, timeout: 90000 });
    await page.waitForTimeout(pageInfo.url.includes('appfolioim') ? 8000 : 2500);
    await dismissPopups(page);
    const status = response && response.status() >= 400 ? `http-${response.status()}` : 'ok';
    const data = await extractPageText(page);
    if (!data.fullInnerText || data.fullInnerText.length < 30) {
      console.log(`Skipped (minimal text): ${pageInfo.url}`);
      continue;
    }
    await writeFile(path.join(outputDir, `${pageInfo.name}.md`), formatMd(pageInfo, data, status), 'utf8');
    await writeFile(path.join(outputDir, `${pageInfo.name}.txt`), data.fullInnerText, 'utf8');
    newResults.push({ name: pageInfo.name, url: pageInfo.url, status, title: data.title });
    console.log(`Saved: ${pageInfo.name}`);
  } catch (err) {
    console.error(`Failed ${pageInfo.url}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();

// Rebuild combined file from all .txt files (main pages + extras)
const files = (await readdir(outputDir))
  .filter((f) => f.endsWith('.txt') && !f.startsWith('00-'))
  .sort();

const combined = [
  '# Avid Realty Partners — Full Site Text Export',
  '',
  `Exported: ${new Date().toISOString()}`,
  `Total pages: ${files.length}`,
  '',
];

for (const file of files) {
  const content = await readFile(path.join(outputDir, file), 'utf8');
  combined.push('='.repeat(80));
  combined.push(`FILE: ${file}`);
  combined.push('='.repeat(80));
  combined.push('');
  combined.push(content);
  combined.push('');
}

await writeFile(path.join(outputDir, '00-all-pages-combined.txt'), combined.join('\n'), 'utf8');

let existingLog = [];
try {
  existingLog = JSON.parse(await readFile(path.join(outputDir, '_text-export-log.json'), 'utf8'));
} catch {}

const mergedLog = [...existingLog.filter((e) => !e.name.startsWith('extra__') && !e.name.includes('__#')), ...newResults];
await writeFile(path.join(outputDir, '_text-export-log.json'), JSON.stringify(mergedLog, null, 2), 'utf8');

// Remove junk from first broken run
for (const junk of await readdir(outputDir)) {
  if (junk.includes('__#') || junk.includes('__news') && junk.endsWith('.md')) {
    // keep valid files only
  }
  if (/15-media-news__(#|news)\.(md|txt)$/.test(junk) || /14-media-events__(#|events|list|month|today)\.(md|txt)$/.test(junk)) {
    const { unlink } = await import('fs/promises');
    await unlink(path.join(outputDir, junk)).catch(() => {});
  }
}

console.log(`Done. Combined file has ${files.length} pages.`);
