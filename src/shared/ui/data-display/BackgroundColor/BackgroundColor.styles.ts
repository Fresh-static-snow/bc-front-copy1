import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledColorIndicatorProps, StyledRootProps } from './BackgroundColor.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $stripes, $baseColor, $colorIndicator, $borderWrapper, $borderRadius }) => {
    const baseStyles = css`
      position: relative;
      width: 100%;
      height: 100%;
      ${$colorIndicator ? 'padding-left: 8px;' : ''}
      ${$borderRadius ? 'border-radius: 4px;' : ''} 
      overflow: hidden;
    `;

    if ($borderWrapper) {
      return css`
        ${baseStyles}
        border: 1px dashed ${theme.appColors.secondary_04};
      `;
    }

    return css`
      ${baseStyles}
      background: ${$stripes
        ? `repeating-linear-gradient(
          -60deg,
          ${$baseColor ?? theme.appColors.palette_01}40 0 15px,
          ${$baseColor ?? theme.appColors.palette_01}26 15px 30px
        )`
        : `${$baseColor ?? theme.appColors.palette_01}40`};
    `;
  },
);

export const BorderWrapper = styled('div')(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px dashed ${theme.appColors.secondary_04};
    border-radius: 4px;
    overflow: hidden;
  `,
);

export const ColorIndicator = styled('div')<StyledColorIndicatorProps>(
  ({ theme, $baseColor }) => css`
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 100%;
    background: ${$baseColor ?? theme.appColors.palette_01};
    border-radius: 4px 0 0 4px;
  `,
);
