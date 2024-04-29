import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    position: fixed;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: calc(100dvw - 32px);
    padding: 12px;
    background: ${theme.appColors.primary_05};
    box-shadow: ${theme.appShadows.primary};
    border-radius: 4px;
    z-index: 3000;
  `,
);

export const Message = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    color: ${theme.appColors.primary_02};
  `,
);
