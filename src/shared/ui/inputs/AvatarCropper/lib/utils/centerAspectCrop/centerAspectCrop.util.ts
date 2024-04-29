import { centerCrop, makeAspectCrop } from 'react-image-crop';

/**
 * Creates a centered aspect crop for an image based on the specified media dimensions and aspect ratio.
 *
 * @param {number} mediaWidth The width of the media (e.g., image).
 * @param {number} mediaHeight The height of the media (e.g., image).
 * @param {number} aspect The desired aspect ratio for the crop.
 */
const centerAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) =>
  centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );

export default centerAspectCrop;
