import { readdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import mammoth from 'mammoth';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..', 'Avid Realty Partners', 'Blog Posts');
const outFile = join(__dirname, '..', 'src', 'data', 'blogPosts.js');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function guessAuthor(title) {
  if (/economic|inflation|fed|treasury|outlook/i.test(title)) return 'Craig Berger';
  if (/sustainable|green/i.test(title)) return 'James MacQueen';
  if (/millennial/i.test(title)) return 'Jim McCarthy';
  return 'Craig Berger';
}

function guessCategory(title) {
  if (/outlook|economic|inflation|fed|treasury|recession/i.test(title)) return 'Economic Insights';
  if (/tax|non-recourse|roi|investing|multifamily/i.test(title)) return 'Investment Strategy';
  if (/sustainable|green/i.test(title)) return 'Sustainability';
  if (/millennial/i.test(title)) return 'Investment Trends';
  return 'Real Estate Trends';
}

const skip = /topic ideas|copy of/i;

const files = readdirSync(blogDir)
  .filter((f) => f.endsWith('.docx') && !skip.test(f))
  .sort();

const posts = [];

for (const file of files) {
  const title = file
    .replace(/\.docx$/i, '')
    .replace(/^\[WEBSITE VERSION\]\s*/i, '')
    .replace(/\s*-\s*\d{1,2}-\d{1,2}-\d{2,4}.*$/i, '')
    .replace(/_/g, ':')
    .trim();

  const { value: html } = await mammoth.convertToHtml({ path: join(blogDir, file) });
  const text = html
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (!text || text.length < 100) continue;

  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  const excerpt = (paragraphs[0] ?? text).slice(0, 280).trim() + (paragraphs[0]?.length > 280 ? '…' : '');
  const content = paragraphs.join('\n\n');

  posts.push({
    slug: slugify(title),
    title,
    author: guessAuthor(title),
    date: '2023-01-01',
    category: guessCategory(title),
    excerpt,
    image: '/properties/pearl-at-midtown.jpg',
    content,
  });
}

// De-dupe by slug (prefer [WEBSITE VERSION] files processed first due to sort)
const seen = new Set();
const unique = posts.filter((p) => {
  if (seen.has(p.slug)) return false;
  seen.add(p.slug);
  return true;
});

const js = `// Auto-generated from Avid Realty Partners/Blog Posts — run: node scripts/extract-blogs.mjs
export const blogPostsFromAssets = ${JSON.stringify(unique, null, 2)};
`;

writeFileSync(outFile, js);
console.log(`Extracted ${unique.length} blog posts -> src/data/blogPosts.js`);
