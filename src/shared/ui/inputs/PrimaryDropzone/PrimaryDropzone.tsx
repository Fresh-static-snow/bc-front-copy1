import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useController } from 'react-hook-form';

import { IconCrossSvg, IconUploadCloudSvg } from '@/shared/assets';
import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import * as S from './PrimaryDropzone.styles';
import { PrimaryDropzoneProps } from './PrimaryDropzone.types';

/**
 * List of types for React Dropzone.
 * Made this way to make it easier to pass props.
 */
const fileTypes = {
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  pdf: 'application/pdf',
  txt: 'text/plain',
};

/**
 * Dropzone for one file with preview.
 *
 * Component is intended to work only in conjunction with the React Hook Form.
 */
export const PrimaryDropzone: React.FC<PrimaryDropzoneProps> = memo(
  ({ control, name, types = [], disabled }) => {
    const { field, fieldState } = useController({ name, control, defaultValue: null });

    // * Convert prop types to correct list of React Dropzone accepted types.
    const acceptedTypes = useMemo(
      () => types.reduce((obj, type) => ({ ...obj, [fileTypes[type]]: [] }), {}),
      [types],
    );

    const [previewImage, setPreviewImage] = useState<string>(); // TODO Add default icon or image for text files.
    const [previewName, setPreviewName] = useState<string>();

    const onUploadFile = useCallback(
      (files: File[]) => {
        if (files?.length > 0) {
          // * Loading and reading file for preview.
          const reader = new FileReader();
          reader.onload = () => {
            setPreviewImage(reader.result?.toString() || '');
            setPreviewName(files[0].name);
          };
          reader.readAsDataURL(files[0]);

          // * Change field in form.
          field.onChange(files[0]);
        }
      },
      [field],
    );

    const onDeleteFile = useCallback(() => {
      // * Clear preview url and name.
      setPreviewImage(undefined);
      setPreviewName(undefined);
      // * Clear field in form.
      field.onChange(null);
    }, [field]);

    // * Props for dropzone input and parent component.
    const { getRootProps, getInputProps, isDragActive, isDragReject, isFocused } = useDropzone({
      onDrop: onUploadFile,
      accept: acceptedTypes,
    });

    // * Adds a value to the preview name and image, if there is one in the form controller or removes it if there is no value.
    useEffect(() => {
      if (!previewImage && !previewName && field.value) {
        // * If the value is a string, then add it to the preview.
        if (typeof field.value === 'string') {
          const fileNameParts = field.value.split('/');
          const fileName = fileNameParts[fileNameParts.length - 1];

          setPreviewImage(field.value);
          setPreviewName(fileName);
        } else {
          onUploadFile([field.value] as File[]);
        }
      }
      if (previewImage && previewName && !field.value) {
        setPreviewImage(undefined);
        setPreviewName(undefined);
      }
    }, [field, onUploadFile, previewImage, previewName]);

    return (
      <S.Root data-testid="PrimaryDropzone">
        <S.Dropzone
          {...getRootProps()}
          $error={!!fieldState?.error?.message || isDragReject}
          $isDragActive={isDragActive}
          $isFocused={isFocused}
          // * This prop is needed to hide the element and have the correct focus state.
          // * When unmounted or disabled, the focus state does not change.
          $hidden={!!previewImage}
          data-testid="PrimaryDropzone-dropzone"
        >
          <input
            {...getInputProps()}
            data-testid={`PrimaryDropzone${name ? `-${name}` : '-input'}`}
          />

          <S.InfoText>
            <IconUploadCloudSvg />
            Browse your files
          </S.InfoText>
        </S.Dropzone>

        {previewImage && (
          <S.FilePreview $error={!!fieldState?.error?.message}>
            <S.PreviewContent>
              <S.Image src={previewImage} />
              <S.Name>{previewName}</S.Name>
            </S.PreviewContent>

            <PrimaryButton
              onClick={onDeleteFile}
              label="Delete"
              IconComponent={IconCrossSvg}
              variant="secondary"
            />
          </S.FilePreview>
        )}

        {disabled && <S.DisabledWrapper />}
        <FieldErrorMessage errorMessage={fieldState?.error?.message} />
      </S.Root>
    );
  },
);
