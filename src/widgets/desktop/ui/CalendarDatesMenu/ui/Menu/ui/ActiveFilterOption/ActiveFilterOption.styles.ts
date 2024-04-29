import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 3px;
    width: max-content;
    padding: 8px 10px;
    border-radius: 4px;
    background: ${theme.appColors.primary_04};
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
  `,
);

export const RemoveOptionButton = styled('button')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    transition: all ${theme.appTransitions.primary}ms;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.7;
    }

    & svg {
      width: 16px;
      height: 16px;
    }

    & g {
      fill: ${theme.appColors.primary_02};
    }

    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);
