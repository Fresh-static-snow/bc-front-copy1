import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    position: relative;
    height: 48px;
    padding: 10px 24px;
    background: ${theme.appColors.primary_05};
    border-top: 1px solid ${theme.appColors.primary_03};

    &::after {
      position: absolute;
      z-index: 15;
      bottom: -1px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: ${theme.appColors.primary_05};
      border-bottom: 1px solid ${theme.appColors.primary_03};
    }
  `,
);
