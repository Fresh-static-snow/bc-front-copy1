import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('button')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    min-height: 32px !important;
    padding: 0 10px !important;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_02};
    transition: all ${theme.appTransitions.primary}ms;
    cursor: pointer;

    &:hover {
      background: ${theme.appColors.primary_04};
    }

    & g {
      fill: ${theme.appColors.primary_02};
    }
    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);

export const OptionCheck = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
  `,
);
