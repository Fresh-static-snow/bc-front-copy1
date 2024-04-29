import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AppContent = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: calc(100dvh - 48px - 48px);
    background: ${theme.appColors.primary_06};
  `,
);
