/**
 * This script is to be run after the build to insert invisible hero image inside html body,
 * this will force browser to preload the image before React & Swiper start rendering the hero section.
 * This script should be deprecated and removed once website will have SSG.
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';

async function main() {
  let indexHtml;

  try {
    indexHtml = fs.readFileSync('dist/index.html', 'utf8');
  } catch (err) {
    throw new Error('Could not find index.html, ensure build is ready in dist folder.');
  }

  fs.mkdirSync('./node_modules/.temp', { recursive: true });

  // Build the helper file in vite ssr mode
  execSync(`vite build --ssr ./scripts/hero_main_ssr.jsx --outDir ./node_modules/.temp --base=/${process.env.PUBLIC_PATH || ''}`);

  // Since we are gonna use it as a module, we need to rename it to .mjs
  fs.renameSync('./node_modules/.temp/hero_main_ssr.js', './node_modules/.temp/hero_main_ssr.mjs');

  const { render } = await import('../node_modules/.temp/hero_main_ssr.mjs');

  // Get the static HTML of picture element,
  // so it contains correct sources and browser could pick up necessary image to preload
  // depending on supported formats & screen size
  const pictureHtml = render();

  indexHtml = indexHtml.replace(
    '</head>',
    `${pictureHtml}</head>`,
  );

  fs.writeFileSync('dist/index.html', indexHtml);
}

try {
  await main();

  console.log('Hero image inserted successfully');
} catch (err) {
  console.error('Error inserting hero image', err);
  process.exit(1);
}
