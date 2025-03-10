/**
 * This script generates hero images for desktop, tablet, and mobile breakpoints.
 * It uses ImageMagick to resize the image to the target aspect ratio without stretching.
 * Then, it uses @frostoven/squoosh-cli to process the image with different formats and sizes.
 * 
 * Requirements:
 * - ImageMagick
 * 
 * Usage:
 * node scripts/generate_hero1.js path/to/image.jpg
 */
import { exec, execSync } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import os from 'os';

const execAsync = promisify(exec);

const sizes = {
  desktop: [1440, 960],
  tablet: [768, 1024],
  mobile: [375, 700]
}

const nameSuffix = {
  desktop: 'desktop',
  mobile: 'mob',
  tablet: 'tablet',
}

/**
 * Resize image to match target aspect ratio without stretching
 * @param {string} inputImage - Path to input image
 * @param {number} targetWidth - Target width
 * @param {number} targetHeight - Target height
 * @returns {string} - Path to resized image (temporary file)
 */
async function resizeToAspectRatio(inputImage, targetWidth, targetHeight) {
  const tempDir = os.tmpdir();
  const tempFile = path.join(tempDir, path.basename(inputImage));
  
  // Use ImageMagick to resize while maintaining aspect ratio and padding if needed
  const resizeCommand = `convert "${inputImage}" -gravity center -resize ${targetWidth}x${targetHeight}^ -extent ${targetWidth}x${targetHeight} "${tempFile}"`;
  
  try {
    await execAsync(resizeCommand, { stdio: 'inherit' });

    return tempFile;
  } catch (error) {
    console.error('Error resizing image:', error);
    throw error;
  }
}

async function processImage(inputImage, outDir, outSuffix, width, height, format) {
  try {    
    const head = `npx @frostoven/squoosh-cli`;
    const resize = `--resize '{"enabled":true,"width":${width},"height":${height},"method":"lanczos3","fitMethod":"contain","premultiply":true,"linearRGB":true}'`;

    let formatCommand;

    switch (format) {
      case 'png':
        formatCommand = `--quant '{"enabled":true,"zx":0,"maxNumColors":256,"dither":1}' --oxipng '{"level":3,"interlace":false}'`;
        break;
      case 'webp':
        formatCommand = `--webp '{"quality":75,"target_size":0,"target_PSNR":0,"method":6,"sns_strength":50,"filter_strength":60,"filter_sharpness":0,"filter_type":1,"partitions":0,"segments":4,"pass":1,"show_compressed":0,"preprocessing":0,"autofilter":0,"partition_limit":0,"alpha_compression":1,"alpha_filtering":1,"alpha_quality":100,"lossless":0,"exact":0,"image_hint":0,"emulate_jpeg_size":0,"thread_level":0,"low_memory":0,"near_lossless":100,"use_delta_palette":0,"use_sharp_yuv":0}'`;
        break;
      default:
        throw new Error(`Unsupported format: ${format}`);
    }

    const squooshCommand = `${head} "${inputImage}" ${resize} ${formatCommand} -d ${outDir} -s ${outSuffix}`;
    execSync(squooshCommand, { stdio: 'inherit' });
    
  } catch (error) {
    console.error(`Error processing image: ${error}`);
  }
}

async function main() {
  const inputImage = process.argv[2];

  if (!inputImage) {
    console.error('Please provide an image as input');
    return;
  }

  for (const [name, [width, height]] of Object.entries(sizes)) {
    console.log(`Generating ${name} image Width: ${width}, Height: ${height}...`);

    const dir = `./src/assets/hero/${name}`;
    
    // Make sure the directory exists
    fs.mkdirSync(dir, { recursive: true });

    // squoosh cli version does not handle "contain" resize well, so we need to do pre-resize
    const resizedImage = await resizeToAspectRatio(inputImage, width * 2, height * 2);

    try {
      // 1x png
      await processImage(resizedImage, dir, `${nameSuffix[name]}`, width, height, 'png');
      // 2x png
      await processImage(resizedImage, dir, `${nameSuffix[name]}@2x`, width * 2, height * 2, 'png');
      // 1x webp
      await processImage(resizedImage, dir, `${nameSuffix[name]}`, width, height, 'webp');
      // 2x webp
      await processImage(resizedImage, dir, `${nameSuffix[name]}@2x`, width * 2, height * 2, 'webp');
    } finally {
      // Clean up temporary file
      fs.unlinkSync(resizedImage);
    }
  }
}

main();
