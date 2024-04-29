import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    height: 100dvh;
  `,
);

export const OptionListWrapper = styled('div')(
  () => css`
    width: 100%;
    height: calc(100dvh - 45px - 64px);
    padding: 14px 20px;
    overflow-y: auto;
  `,
);

export const Separator = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.appColors.primary_03};
  `,
);

export const Footer = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    border-top: 1px solid ${theme.appColors.primary_03};
  `,
);
