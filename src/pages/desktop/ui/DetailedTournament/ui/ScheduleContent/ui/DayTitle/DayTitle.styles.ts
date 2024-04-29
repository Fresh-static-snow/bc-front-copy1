import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    position: sticky;
    top: 48px;
    left: 0;
    z-index: 9;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 48px;
    padding: 9px 0;
    background: ${theme.appColors.primary_06};
    border-top: 1px solid ${theme.appColors.primary_03};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${theme.appColors.primary_02};
  `,
);
