/**
 * Returns the maximum available size that is possible to fit the given aspect ratio
 * @param {Ratio} r
 * @param {number} maxWidth
 * @param {number} maxHeight
 */
function getMaxAvailableSize(r, maxWidth, maxHeight) {
  const _height = maxWidth / r;

  if (_height <= maxHeight) {
    return {
      width: maxWidth,
      height: _height,
    };
  }

  return {
    width: r * maxHeight,
    height: maxHeight,
  };
}

/**
 * @typedef {Object} SanityCrop - Crop parameters for the image asset,
 * that could be configured in Sanity Studio
 * @property {number} left - 0..1
 * @property {number} top - 0..1
 * @property {number} right - 0..1
 * @property {number} bottom - 0..1
*/

/**
 * @typedef {Object} SanityHotspot - Hotspot parameters (focus point and minimum visible scope),
 * for the image asset that could be configured in Sanity Studio
 * @property {number} left - 0..1 x-coordinate of the focus center point based on original image
 * @property {number} top - 0..1 y-coordinate of the focus center point based on original image
 * @property {number} width - 0..1 width of the minimum visible scope
 * @property {number} height - 0..1 height of the minimum visible scope
*/

/**
 * Constructs company logo URL for displaying
 * Given the original image URL, logo crop and "hotspot" from Sanity
 * @param {string} url - Sanity asset URL
 * @param {object} targetSize - target size of the image to display 
 * @param {SanityCrop} logoCrop 
 * @param {SanityHotspot} logoFocalScope 
 */
export function getCompanyLogoURL(url, targetSize, logoCrop, logoFocalScope) {
  const searchParams = new URLSearchParams();

  // Specify the image dimensions and cropping mode
  // We want processed the image to consume less bandwidth & CPU/GPU of device
  // Check out the documentation for more information: https://www.sanity.io/docs/image-urls
  // Set render size x2 to cover both retina and non-retina displays
  searchParams.set('w', String(targetSize.width));
  searchParams.set('h', String(targetSize.height));
  searchParams.set('auto', 'format'); // auto-select the best image format (webp, jpg, png)

  const targetAspectRatio = targetSize.width / targetSize.height;

  // extract the original image dimensions from URL
  const result = url.match(/-(\d+)x(\d+)\./);

  if (!result) {
    return url;
  }

  const originalWidth = parseInt(result[1], 10);
  const originalHeight = parseInt(result[2], 10);

  let croppedWidth = originalWidth;
  let croppedHeight = originalHeight;

  if (logoCrop) {
    searchParams.set(
      'rect',
      [
        ~~(logoCrop.left * originalWidth),
        ~~(logoCrop.top * originalHeight),
        ~~((1 - logoCrop.right - logoCrop.left) * originalWidth),
        ~~((1 - logoCrop.bottom - logoCrop.top) * originalHeight),
      ].join(','));

    croppedWidth = ~~((1 - logoCrop.right - logoCrop.left) * originalWidth);
    croppedHeight = ~~((1 - logoCrop.bottom - logoCrop.top) * originalHeight);
  }

  if (logoFocalScope) {
    // minimum size of the logo that should always be visible
    const focalWidth = ~~(logoFocalScope.width * originalWidth);
    const focalHeight = ~~(logoFocalScope.height * originalHeight);

    const maxAvailable = getMaxAvailableSize(targetAspectRatio, croppedWidth, croppedHeight);

    // If we can't fit the focal part into the available space, we need to contain the cropped image
    if (maxAvailable.width < focalWidth || maxAvailable.height < focalHeight) {
      searchParams.set('fit', 'fill'); // crop the image to fit the dimensions exactly
      searchParams.set('bg', '00ffffff'); // make the background transparent
      // crop the required part only
      searchParams.set(
        'rect',
        [
          ~~(logoFocalScope.x * originalWidth - focalWidth / 2),
          ~~(logoFocalScope.y * originalHeight - focalHeight / 2),
          focalWidth,
          focalHeight,
        ].join(','));
    } else {
      searchParams.set('fit', 'crop');
      searchParams.set('crop', 'focalpoint');  
      searchParams.set('fp-x', String(logoFocalScope.x));
      searchParams.set('fp-y', String(logoFocalScope.y));
    }
  }

  return `${url}?${searchParams.toString()}`;
};
