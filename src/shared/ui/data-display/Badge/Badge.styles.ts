import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledBodyProps, StyledRootProps } from './Badge.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $height }) => css`
    position: relative;
    width: 24px;
    height: ${$height || '48px'};
  `,
);

export const Body = styled('div')<StyledBodyProps>(
  ({ theme, $baseColor, $secondaryColor, $right }) => css`
    position: absolute;
    top: 0;
    right: ${$right || '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 4px;
    width: 48px;
    height: 24px;
    background: linear-gradient(
        0deg,
        ${$baseColor || theme.appColors.secondary_10},
        ${$baseColor || theme.appColors.secondary_10}
      ),
      ${$secondaryColor};
    opacity: 0.5;
  `,
);

export const Text = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${theme.appColors.primary_05};
    text-transform: uppercase;
  `,
);
