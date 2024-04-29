import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    height: 48px;
    padding: 10px 24px;
    background: ${theme.appColors.primary_05};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${theme.appColors.primary_02};
    width: 1190px;
    padding-top: 0;
    height: 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  `,
);
