import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Dialog as DialogMui } from '@mui/material';

import { StyledDialogProps } from './Modal.types';

export const Dialog = styled(DialogMui, {
  shouldForwardProp: (prop) =>
    prop !== '$width' &&
    prop !== '$maxWidth' &&
    prop !== '$maxHeight' &&
    prop !== '$verticalAlign' &&
    prop !== '$borderRadius' &&
    prop !== '$isMobile',
})<StyledDialogProps>(
  ({ $isMobile, $width, $maxWidth, $maxHeight, $verticalAlign, $borderRadius }) => css`
    & .MuiDialog-container:after {
      vertical-align: ${$verticalAlign ?? 'top'};
    }

    & .MuiDialog-paper {
      width: ${$width ?? 'auto'};
      max-width: ${$maxWidth || 'none'};
      max-height: ${$maxHeight || 'none'};
      margin: 100px 32px;
      border-radius: ${$borderRadius ?? '10px'};

      ${$isMobile
        ? css`
            width: 100%;
            height: 100dvh;
            max-width: none !important;
            max-height: none !important;
            margin: 0;
            border-radius: 0;
          `
        : ''}
    }
  `,
);
