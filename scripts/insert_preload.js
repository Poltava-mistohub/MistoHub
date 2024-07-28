/**
 * This script is to be run after the build to insert preload tags for dynamic imports and their css.
 * It enhances the performance of the application by preloading the dynamic imports and their css.
 * This is essential in case if website is NOT built via SSG (server-side generation).
 * This script should be deprecated and removed once website will have SSG.
 */

import fs from 'node:fs';

function main() {
  const publicPath = process.env.PUBLIC_PATH ? `/${process.env.PUBLIC_PATH}/` : '/';
  let manifest;
  let indexHtml;

  try {
    manifest = JSON.parse(fs.readFileSync('dist/manifest.json', 'utf8'));
  } catch (err) {
    throw new Error('Could not read manifest.json, ensure vite has built the project and build.manifest is enabled in config.');
  }

  try {
    indexHtml = fs.readFileSync('dist/index.html', 'utf8');
  } catch (err) {
    throw new Error('Could not find index.html, ensure build is ready in dist folder.');
  }

  const files = Object.entries(manifest);
  const [, entry] = files.find(([, entry]) => entry.isEntry);

  if (!entry) {
    throw new Error('Could not find entry point in manifest.json');
  }

  // find the dynamic imports of the entrypoint
  const firstOrder = entry.dynamicImports || [];

  for (const file of firstOrder) {
    const [, thisEntry] = files.find(([key]) => key === file);

    // add modulepreload tag for the dynamic import
    const preload = `<link rel="modulepreload" href="${publicPath}${thisEntry.file}">`;
    indexHtml = indexHtml.replace('</head>', `${preload}\n</head>`);

    // add preload tags for the css of the dynamic import
    for (const css of thisEntry.css) {
      const preload = `<link rel="stylesheet" href="${publicPath}${css}">`;
      indexHtml = indexHtml.replace('</head>', `${preload}\n</head>`);
    }
  }

  // Preload woff2 (most used) fonts that are listed as asset of the entry
  for (const asset of entry.assets) {
    if (asset.endsWith('.woff2')) {
      const preload = `<link rel="preload" href="${publicPath}${asset}" as="font" type="font/woff2" crossorigin>`;
      indexHtml = indexHtml.replace('</head>', `${preload}\n</head>`);
    }
  }

  fs.writeFileSync('dist/index.html', indexHtml);
}

try {
  main();

  console.log('Preload tags inserted successfully');
} catch (err) {
  console.error('Error inserting preload tags:', err);
  process.exit(1);
}