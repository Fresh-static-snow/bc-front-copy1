import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledDropzoneProps, StyledFilePreviewProps } from './PrimaryDropzone.types';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 100%;
    height: 44px;
  `,
);

export const Dropzone = styled('div')<StyledDropzoneProps>(
  ({ theme, $isDragActive, $isFocused, $error, $hidden }) => {
    const baseStyles = css`
      display: ${$hidden ? 'none' : 'flex'};
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: ${$isDragActive || $isFocused
        ? theme.appColors.secondary_03
        : theme.appColors.primary_06};
      cursor: pointer;
      transition: all ${theme.appTransitions.primary}ms;

      &:hover {
        border: 1px dashed ${theme.appColors.secondary_04};
        background: ${theme.appColors.primary_04};
      }
    `;

    const getBorderStyle = () => {
      if ($error) {
        return css`
          border: 1px dashed ${theme.appColors.secondary_09} !important;
        `;
      }
      if ($isDragActive || $isFocused) {
        return css`
          border: 1px dashed ${theme.appColors.primary_02} !important;
        `;
      }
      return css`
        border: 1px dashed ${theme.appColors.secondary_03};
      `;
    };

    return css`
      ${baseStyles}
      ${getBorderStyle()}
    `;
  },
);

export const InfoText = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-family: ${theme.appFonts.primary};
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_01};

    & g {
      fill: ${theme.appColors.primary_01};
    }
    & path {
      stroke: ${theme.appColors.primary_01};
    }
  `,
);

export const FilePreview = styled('div')<StyledFilePreviewProps>(
  ({ theme, $error }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    height: 100%;
    padding: 6px 24px;
    border: 1px dashed
      ${$error ? `${theme.appColors.secondary_09} !important` : theme.appColors.secondary_03};
    border-radius: 4px;
    background: ${theme.appColors.primary_06};
    transition: all ${theme.appTransitions.primary}ms;
  `,
);

export const PreviewContent = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  `,
);

export const Image = styled('img')(
  () => css`
    width: 48px;
    height: 32px;
    border-radius: 4px;
    object-fit: cover;
    object-position: 50% 50%;
  `,
);

export const Name = styled('div')(
  ({ theme }) => css`
    width: calc(100% - 48px);
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.secondary_04};
    display: -webkit-box;
    display: -moz-box;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    hyphens: auto;
    word-wrap: break-word;
  `,
);

export const DisabledWrapper = styled('div')(
  ({ theme }) => css`
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: ${theme.appColors.primary_04};
    border: 1px solid ${theme.appColors.secondary_03};
  `,
);
