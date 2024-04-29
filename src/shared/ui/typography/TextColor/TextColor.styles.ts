import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './TextColor.types';

export const Root = styled('div')<StyledRootProps>(
  ({
    theme,
    $fontWeight,
    $fontSize,
    $lineHeight,
    $baseColor,
    $secondaryColor,
    $limitedWidth,
  }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: ${$fontWeight ?? '400'};
    font-size: ${$fontSize ?? '12px'};
    line-height: ${$lineHeight ?? '15px'};
    letter-spacing: 0.004em;
    background: linear-gradient(
        0deg,
        ${$baseColor ?? theme.appColors.secondary_10},
        ${$baseColor ?? theme.appColors.secondary_10}
      ),
      ${$secondaryColor};
    background-clip: text;
    -webkit-text-fill-color: transparent;

    ${$limitedWidth
      ? css`
          display: inline-block;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : ''}
  `,
);
