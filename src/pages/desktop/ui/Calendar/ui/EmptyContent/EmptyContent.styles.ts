import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 24px;
    color: ${theme.appColors.secondary_13};
    text-align: center;
    letter-spacing: 0.096px;
  `,
);
