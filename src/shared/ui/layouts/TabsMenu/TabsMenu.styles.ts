import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 49px;
    padding: 5px 24px;
    background: ${theme.appColors.primary_05};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);

export const MobileRoot = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 32px;
    padding: 0 20px;
    background: ${theme.appColors.primary_02};
    color: #fff !important;

    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
);

export const TabsWrapper = styled('div')(
  () => css`
    width: max-content;
    margin: 0 auto;
  `,
);
