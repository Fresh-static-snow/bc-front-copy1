import 'react-image-crop/dist/ReactCrop.css';

import { useEffect, useRef, useState } from 'react';
import ReactCrop, { Crop, PercentCrop, PixelCrop } from 'react-image-crop';

import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import * as S from './AvatarCropper.styles';
import { AvatarCropperProps } from './AvatarCropper.types';
import { centerAspectCrop, getCroppedCanvas } from './lib';

const aspect = 1 / 1;

export const AvatarCropper: React.FC<AvatarCropperProps> = ({
  image,
  onCancel = () => {},
  onUpdateAvatar = () => {},
}) => {
  const [previewImage, setPreviewImage] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = event.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  };

  const onChangeCrop = (newCrop: PixelCrop, percentageCrop: PercentCrop) => {
    setCrop(percentageCrop);
  };

  const onCompleteCrop = (newCrop: PixelCrop) => {
    setCompletedCrop(newCrop);
  };

  const onSendAvatar = () => {
    const croppedCanvas: HTMLCanvasElement = getCroppedCanvas(imgRef.current, completedCrop);

    croppedCanvas.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to create blob');
      }

      const file = new File([blob], 'new_avatar', { type: blob.type });

      if (file?.size > 1000 * 1024) {
        setImageError('File size must be less than 1MB');
        return;
      }
      setImageError('');

      onUpdateAvatar(file);
      onCancel();
    });
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result?.toString() || '');
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <>
      <S.Content>
        {!!previewImage && (
          <ReactCrop
            crop={crop}
            onChange={onChangeCrop}
            onComplete={onCompleteCrop}
            aspect={aspect}
            circularCrop
          >
            <S.PreviewImage ref={imgRef} alt="Crop me" src={previewImage} onLoad={onImageLoad} />
          </ReactCrop>
        )}
      </S.Content>

      <S.Footer>
        <FieldErrorMessage errorMessage={imageError} position="relative" />
        <PrimaryButton label="Cancel" variant="secondary" onClick={onCancel} />
        <PrimaryButton label="Update" variant="primary" onClick={onSendAvatar} />
      </S.Footer>
    </>
  );
};
