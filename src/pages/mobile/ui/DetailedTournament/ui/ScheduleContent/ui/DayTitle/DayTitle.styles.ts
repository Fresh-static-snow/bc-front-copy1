import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 38px;
    padding: 0 20px;
    background: ${theme.appColors.palette_05};
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    color: ${theme.appColors.secondary_08};
  `,
);
