import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 24px;
    border-radius: 4px;
    background: ${theme.appColors.primary_04};
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${theme.appColors.secondary_04};
    overflow: hidden;
  `,
);
