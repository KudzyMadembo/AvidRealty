import { copyFileSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src = join(root, 'Avid Realty Partners');
const pub = join(root, 'public');

const ensure = (dir) => mkdirSync(dir, { recursive: true });

function pickPropertyImage(folderName) {
  const dir = join(src, 'Property Level Videos & Pictures', folderName);
  const files = readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f));
  const exterior = files.find((f) => /exterior/i.test(f));
  const gallery = files.find((f) => /gallery/i.test(f) && /ext/i.test(f));
  return join(dir, exterior ?? gallery ?? files[0]);
}

function optimize(input, output, width) {
  ensure(dirname(output));
  execSync(`npx --yes sharp-cli resize ${width} --input "${input}" --output "${output}"`, {
    stdio: 'pipe',
    cwd: root,
  });
}

ensure(join(pub, 'properties'));
ensure(join(pub, 'team'));
ensure(join(pub, 'webinars'));

// Logo & favicon from official New Logo folder
execSync('python scripts/update-logo.py', { cwd: root, stdio: 'inherit' });

// Favicon handled by update-logo.py

// Craig Berger headshot
optimize(join(src, 'Craig-Berger-Profile-350x350.jpg'), join(pub, 'team', 'craig-berger.jpg'), 400);
optimize(join(src, 'Craig-Berger-Profile-1000x1000.jpg'), join(pub, 'team', 'craig-berger-lg.jpg'), 800);

// Property photos
const propertyMap = {
  'auxo-at-memorial.jpg': 'Auxo at Memorial',
  'pearl-at-midtown.jpg': 'The Pearl at Midtown',
  'pines-at-woodcreek.jpg': 'The Pines at Woodcreek',
  'regency-st-louis.jpg': 'The Regency at St. Louis',
  'reserve-at-heritage.jpg': 'The Reserve at Heritage',
};

for (const [file, folder] of Object.entries(propertyMap)) {
  optimize(pickPropertyImage(folder), join(pub, 'properties', file), 900);
}

// Webinar thumbnail
const webinarThumb = join(src, 'Webinars', 'What to do with 50k in Cash Webinar - Video Thumb - 1280x720.jpg');
if (statSync(webinarThumb).isFile()) {
  optimize(webinarThumb, join(pub, 'webinars', '50k-cash.jpg'), 900);
}

// Hero from social header (LinkedIn banner works well as wide hero)
const heroSrc = join(src, 'Social Media Header Images', 'LinkedIn - 1584x396.jpeg');
if (statSync(heroSrc).isFile()) {
  optimize(heroSrc, join(pub, 'hero.jpg'), 1600);
}

writeFileSync(
  join(root, 'src', 'data', 'asset-paths.json'),
  JSON.stringify({ properties: propertyMap, integrated: new Date().toISOString() }, null, 2),
);

console.log('Assets integrated into public/');
