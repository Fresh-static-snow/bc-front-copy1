import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44px;
    transition: all ${theme.appTransitions.primary}ms;
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: ${theme.appColors.primary_02};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);
