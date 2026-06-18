import { chromium } from 'playwright';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, 'page-text');
const baseUrl = 'https://avidrealtypartners.com/';

const pages = [
  { name: '01-homepage', url: baseUrl },
  { name: '02-about-overview', url: `${baseUrl}overview/` },
  { name: '03-about-why-avid', url: `${baseUrl}why-avid-realty-partners/` },
  { name: '04-about-investment-approach', url: `${baseUrl}investment-approach/` },
  { name: '05-about-track-record', url: `${baseUrl}track-record/` },
  { name: '06-about-meet-the-team', url: `${baseUrl}meet-the-avid-team/` },
  { name: '07-investment-opportunities', url: `${baseUrl}investment-opportunities/` },
  { name: '08-portfolio', url: `${baseUrl}portfolio/` },
  { name: '09-careers', url: `${baseUrl}join-the-avid-team/` },
  { name: '10-media-think-big', url: `${baseUrl}think-big/` },
  { name: '11-media-2023-mid-market-outlook', url: `${baseUrl}report/` },
  { name: '12-media-webinar-replay', url: `${baseUrl}webinar-replay/` },
  { name: '13-media-blog', url: `${baseUrl}blog/` },
  { name: '14-media-events', url: `${baseUrl}events/` },
  { name: '15-media-news', url: `${baseUrl}news/` },
  { name: '16-media-videos', url: `${baseUrl}video/` },
  { name: '17-research', url: `${baseUrl}research/` },
  {
    name: '18-investor-portal',
    url: 'https://investors.appfolioim.com/avidrealtypartners/investor',
    waitUntil: 'domcontentloaded',
    extraWait: 8000,
  },
  { name: '19-contact-us', url: `${baseUrl}contact-us/` },
  { name: '20-invest-with-us', url: `${baseUrl}invest-with-us/` },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
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

async function extractPageText(page) {
  return page.evaluate(() => {
    const skipTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'IFRAME']);

    function isVisible(el) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }

    function cleanText(text) {
      return String(text || '')
        .replace(/\u00a0/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    const title = document.title || '';
    const metaDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '';

    const headings = [];
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => {
      if (!isVisible(el)) return;
      const text = cleanText(el.innerText);
      if (text) headings.push({ level: el.tagName.toLowerCase(), text });
    });

    const paragraphs = [];
    document.querySelectorAll('p, li, blockquote, figcaption, td, th, label, button, a').forEach((el) => {
      if (!isVisible(el) || skipTags.has(el.tagName)) return;
      const text = cleanText(el.innerText);
      if (!text || text.length < 2) return;
      paragraphs.push({ tag: el.tagName.toLowerCase(), text });
    });

    const imageAlts = [];
    document.querySelectorAll('img[alt]').forEach((img) => {
      const alt = cleanText(img.getAttribute('alt') || '');
      if (alt) imageAlts.push(alt);
    });

    const links = [];
    document.querySelectorAll('a[href]').forEach((a) => {
      if (!isVisible(a)) return;
      const text = cleanText(a.innerText);
      const href = a.href;
      if (text) links.push({ text, href });
    });

    const formFields = [];
    document.querySelectorAll('input, textarea, select').forEach((field) => {
      if (!isVisible(field)) return;
      const tag = field.tagName.toLowerCase();
      const type = field.getAttribute('type') || '';
      const name = field.getAttribute('name') || field.getAttribute('id') || '';
      const placeholder = field.getAttribute('placeholder') || '';
      const label =
        field.getAttribute('aria-label') ||
        (field.id
          ? cleanText(document.querySelector(`label[for="${field.id}"]`)?.innerText || '')
          : '');
      const value = tag === 'select' ? '' : field.value || '';
      if (name || placeholder || label) {
        formFields.push({ tag, type, name, label, placeholder, value });
      }
    });

    const bodyText = cleanText(
      Array.from(document.body.querySelectorAll('*'))
        .filter((el) => !skipTags.has(el.tagName) && isVisible(el))
        .map((el) => {
          const childTags = Array.from(el.children).map((c) => c.tagName);
          if (childTags.some((t) => !skipTags.has(t))) return '';
          return cleanText(el.innerText);
        })
        .filter(Boolean)
        .join('\n')
    );

    const fullInnerText = cleanText(document.body.innerText);

    return {
      title,
      metaDescription,
      headings,
      paragraphs,
      imageAlts: [...new Set(imageAlts)],
      links,
      formFields,
      bodyText,
      fullInnerText,
    };
  });
}

function formatAsMarkdown(pageInfo, data, status) {
  const lines = [];
  lines.push(`# ${data.title || pageInfo.name}`);
  lines.push('');
  lines.push(`**URL:** ${pageInfo.url}`);
  lines.push(`**Status:** ${status}`);
  if (data.metaDescription) {
    lines.push(`**Meta description:** ${data.metaDescription}`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Full page text');
  lines.push('');
  lines.push(data.fullInnerText || data.bodyText || '(no text found)');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Headings');
  lines.push('');
  if (data.headings.length) {
    for (const h of data.headings) {
      lines.push(`- **${h.level.toUpperCase()}:** ${h.text}`);
    }
  } else {
    lines.push('(none)');
  }
  lines.push('');
  lines.push('## Paragraphs & list items');
  lines.push('');
  const seen = new Set();
  for (const p of data.paragraphs) {
    const key = `${p.tag}:${p.text}`;
    if (seen.has(key)) continue;
    seen.add(key);
    lines.push(`- [${p.tag}] ${p.text}`);
  }
  lines.push('');
  lines.push('## Image alt text');
  lines.push('');
  if (data.imageAlts.length) {
    for (const alt of data.imageAlts) lines.push(`- ${alt}`);
  } else {
    lines.push('(none)');
  }
  lines.push('');
  lines.push('## Links');
  lines.push('');
  const seenLinks = new Set();
  for (const l of data.links) {
    const key = `${l.text}|${l.href}`;
    if (seenLinks.has(key)) continue;
    seenLinks.add(key);
    lines.push(`- ${l.text} → ${l.href}`);
  }
  lines.push('');
  lines.push('## Form fields');
  lines.push('');
  if (data.formFields.length) {
    for (const f of data.formFields) {
      lines.push(
        `- [${f.tag}${f.type ? `/${f.type}` : ''}] ${f.label || f.name || f.placeholder || 'field'}`
      );
      if (f.placeholder) lines.push(`  - placeholder: ${f.placeholder}`);
      if (f.name) lines.push(`  - name: ${f.name}`);
    }
  } else {
    lines.push('(none)');
  }
  return lines.join('\n');
}

const allResults = [];
const combinedLines = ['# Avid Realty Partners — Full Site Text Export', '', `Exported: ${new Date().toISOString()}`, ''];

for (const pageInfo of pages) {
  const page = await context.newPage();
  let status = 'ok';
  let data = null;

  try {
    const waitUntil = pageInfo.waitUntil || 'networkidle';
    const response = await page.goto(pageInfo.url, { waitUntil, timeout: 90000 });
    await page.waitForTimeout(pageInfo.extraWait ?? 2500);
    await dismissPopups(page);

    if (response && response.status() >= 400) status = `http-${response.status()}`;

    data = await extractPageText(page);

    const md = formatAsMarkdown(pageInfo, data, status);
    const mdPath = path.join(outputDir, `${pageInfo.name}.md`);
    const txtPath = path.join(outputDir, `${pageInfo.name}.txt`);

    await writeFile(mdPath, md, 'utf8');
    await writeFile(txtPath, data.fullInnerText || data.bodyText || '', 'utf8');

    combinedLines.push('');
    combinedLines.push('='.repeat(80));
    combinedLines.push(`PAGE: ${pageInfo.name}`);
    combinedLines.push(`URL: ${pageInfo.url}`);
    combinedLines.push('='.repeat(80));
    combinedLines.push('');
    combinedLines.push(data.fullInnerText || data.bodyText || '(no text found)');

    console.log(`Saved text: ${pageInfo.name} (${status})`);
    allResults.push({ name: pageInfo.name, url: pageInfo.url, status, title: data.title });
  } catch (err) {
    status = `error: ${err.message}`;
    console.error(`Failed ${pageInfo.url}:`, err.message);
    allResults.push({ name: pageInfo.name, url: pageInfo.url, status, title: null });
  } finally {
    await page.close();
  }
}

// Scrape blog posts, news articles, events from listing pages
function safeSlug(href) {
  const u = new URL(href);
  const parts = u.pathname.replace(/\/$/, '').split('/').filter(Boolean);
  const slug = parts[parts.length - 1] || 'index';
  const query = u.search ? u.search.replace(/[?&=]/g, '-').replace(/^-/, '') : '';
  return (slug + (query ? `--${query}` : '')).replace(/[^a-zA-Z0-9._-]/g, '-');
}

const listingPages = [
  {
    name: '13-media-blog',
    url: `${baseUrl}blog/`,
    pattern: /avidrealtypartners\.com\/\d{4}\/\d{2}\//,
  },
  {
    name: '15-media-news',
    url: `${baseUrl}news/`,
    pattern: /avidrealtypartners\.com\/news\/[^/?#]+/,
  },
  {
    name: '14-media-events',
    url: `${baseUrl}events/`,
    pattern: /avidrealtypartners\.com\/event\/[^/?#]+/,
  },
];

const subPages = [];

for (const listing of listingPages) {
  const page = await context.newPage();
  try {
    await page.goto(listing.url, { waitUntil: 'networkidle', timeout: 60000 });
    await dismissPopups(page);
    const hrefs = await page.locator('a[href]').evaluateAll((as) => as.map((a) => a.href));
    const unique = [...new Set(hrefs)].filter(
      (href) =>
        listing.pattern.test(href) &&
        !href.endsWith('#') &&
        !href.includes('#content')
    );
    for (const href of unique) {
      subPages.push({
        name: `${listing.name}__${safeSlug(href)}`,
        url: href,
        parent: listing.name,
      });
    }
  } finally {
    await page.close();
  }
}

console.log(`Found ${subPages.length} sub-pages from blog/news/events`);

for (const pageInfo of subPages) {
  const page = await context.newPage();
  let status = 'ok';
  try {
    await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    await dismissPopups(page);
    const data = await extractPageText(page);
    const md = formatAsMarkdown(pageInfo, data, status);
    const mdPath = path.join(outputDir, `${pageInfo.name}.md`);
    const txtPath = path.join(outputDir, `${pageInfo.name}.txt`);
    await writeFile(mdPath, md, 'utf8');
    await writeFile(txtPath, data.fullInnerText || '', 'utf8');

    combinedLines.push('');
    combinedLines.push('='.repeat(80));
    combinedLines.push(`PAGE: ${pageInfo.name}`);
    combinedLines.push(`URL: ${pageInfo.url}`);
    combinedLines.push('='.repeat(80));
    combinedLines.push('');
    combinedLines.push(data.fullInnerText || '(no text found)');

    console.log(`Saved sub-page text: ${pageInfo.name}`);
    allResults.push({ name: pageInfo.name, url: pageInfo.url, status, title: data.title, parent: pageInfo.parent });
  } catch (err) {
    console.error(`Failed sub-page ${pageInfo.url}:`, err.message);
  } finally {
    await page.close();
  }
}

await writeFile(path.join(outputDir, '00-all-pages-combined.txt'), combinedLines.join('\n'), 'utf8');
await writeFile(path.join(outputDir, '_text-export-log.json'), JSON.stringify(allResults, null, 2), 'utf8');

await browser.close();
console.log(`Done. ${allResults.length} pages exported to ${outputDir}`);
