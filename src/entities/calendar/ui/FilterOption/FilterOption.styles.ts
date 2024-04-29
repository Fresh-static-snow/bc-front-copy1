import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('button')(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
    transition: all ${theme.appTransitions.primary}ms;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      .MuiCheckbox-root {
        border: 1px solid ${theme.appColors.primary_02};
      }

      background: ${theme.appColors.primary_04};
    }
  `,
);
