import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 400px;

    @media (max-width: 768px) {
      padding-inline: 20px;
    }
  `,
);

export const SuccessText = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    text-align: center;
  `,
);
