import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'pages');
mkdirSync(out, { recursive: true });

const images = {
  'about.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85',
  'why-avid.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=85',
  'investment-approach.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85',
  'track-record.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85',
  'team.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85',
  'investment-opportunities.jpg': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=85',
  'portfolio.jpg': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=85',
  'careers.jpg': 'https://images.unsplash.com/photo-1521737711862-e3b97375f902?w=1600&q=85',
  'think-big.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85',
  'report.jpg': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=85',
  'webinar.jpg': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=85',
  'blog.jpg': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=85',
  'events.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50d2ec87?w=1600&q=85',
  'news.jpg': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=85',
  'videos.jpg': 'https://images.unsplash.com/photo-1478737270239-0f18fe7756f2?w=1600&q=85',
  'contact.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
  'research.jpg': 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1600&q=85',
  'home-platform.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
  'home-hero-1.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85',
  'home-hero-2.jpg': 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=85',
  'home-hero-3.jpg': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=85',
};

for (const [file, url] of Object.entries(images)) {
  const dest = join(out, file);
  execSync(`curl -sL "${url}" -o "${dest}"`, { stdio: 'pipe' });
  console.log(`Downloaded ${file}`);
}

console.log('Page hero images ready.');
