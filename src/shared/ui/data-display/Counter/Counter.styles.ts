import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './Counter.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $bgColor, $color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    min-width: 12px;
    height: 12px;
    padding: 2px 3px;
    border-radius: 100px;
    background: ${$bgColor ?? theme.appColors.primary_01};
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    color: ${$color ?? theme.appColors.primary_05};
  `,
);
