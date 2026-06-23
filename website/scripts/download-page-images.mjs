import { mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const out = join(root, 'public', 'pages');
mkdirSync(out, { recursive: true });

const HD = 'w=2400&q=92&auto=format&fit=crop';

const images = {
  'about.jpg': `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?${HD}`,
  'why-avid.jpg': `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?${HD}`,
  'investment-approach.jpg': `https://images.unsplash.com/photo-1551288049-bebda4e38f71?${HD}`,
  'track-record.jpg': `https://images.unsplash.com/photo-1460925895917-afdab827c52f?${HD}`,
  'team.jpg': `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${HD}`,
  'investment-opportunities.jpg': `https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?${HD}`,
  'portfolio.jpg': `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?${HD}`,
  'careers.jpg': `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?${HD}`,
  'think-big.jpg': `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?${HD}`,
  'report.jpg': `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?${HD}`,
  'webinar.jpg': `https://images.unsplash.com/photo-1556761175-b413da4baf72?${HD}`,
  'blog.jpg': `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?${HD}`,
  'events.jpg': `https://images.unsplash.com/photo-1511578314322-379afb476865?${HD}`,
  'news.jpg': `https://images.unsplash.com/photo-1504711434969-e33886168f5c?${HD}`,
  'videos.jpg': `https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?${HD}`,
  'contact.jpg': `https://images.unsplash.com/photo-1497366216548-37526070297c?${HD}`,
  'research.jpg': `https://images.unsplash.com/photo-1642790106117-e829e14a795f?${HD}`,
  'home-platform.jpg': `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${HD}`,
  'home-hero-1.jpg': `https://images.unsplash.com/photo-1566073771259-6a8506099945?${HD}`,
  'home-hero-2.jpg': `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?${HD}`,
  'home-hero-3.jpg': `https://images.unsplash.com/photo-1487958449943-2429e8be8625?${HD}`,
};

function download(url, dest) {
  execSync(`curl -fsSL "${url}" -o "${dest}"`, { stdio: 'pipe' });
  const size = statSync(dest).size;
  if (size < 10000) throw new Error(`File too small (${size} bytes): ${dest}`);
  return size;
}

for (const [file, url] of Object.entries(images)) {
  const dest = join(out, file);
  try {
    const bytes = download(url, dest);
    console.log(`OK ${file} (${Math.round(bytes / 1024)} KB)`);
  } catch (err) {
    console.error(`FAIL ${file}: ${err.message}`);
    process.exitCode = 1;
  }
}

console.log('All HD page hero images ready.');
