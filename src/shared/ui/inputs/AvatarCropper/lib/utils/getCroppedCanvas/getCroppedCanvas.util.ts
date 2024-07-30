import { PixelCrop } from 'react-image-crop';

/**
 * Generates a cropped canvas based on the specified image and crop data.
 *
 * @param {HTMLImageElement} image The image to be cropped.
 * @param {PixelCrop} cropData The cropping dimensions and position.
 */

const getCroppedCanvas = (image: HTMLImageElement, cropData: PixelCrop) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = cropData.width * scaleX;
  canvas.height = cropData.height * scaleY;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    cropData.x * scaleX,
    cropData.y * scaleY,
    cropData.width * scaleX,
    cropData.height * scaleY,
    0,
    0,
    cropData.width * scaleX,
    cropData.height * scaleY,
  );

  return canvas;
};

export default getCroppedCanvas;
