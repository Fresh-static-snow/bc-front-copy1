import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('button')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 7px;
    width: 100%;
    height: 44px;
    padding: 0 24px;
    background: ${theme.appColors.secondary_06};
    color: ${theme.appColors.primary_01};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
    transition: all ${theme.appTransitions.primary}ms;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      background: ${theme.appColors.secondary_05};
    }

    & svg {
      width: 16px;
      height: 16px;
    }

    & g {
      fill: ${theme.appColors.primary_01};
    }

    & path {
      stroke: ${theme.appColors.primary_01};
    }
  `,
);
