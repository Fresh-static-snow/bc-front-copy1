import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ContentWrapper = styled('div')(
  ({ theme }) => css`
    width: 350px;
    border-radius: 4px;
    background: ${theme.appColors.primary_05};
    box-shadow: ${theme.appShadows.primary};
    font-family: ${theme.appFonts.primary};
  `,
);

export const TextWrapper = styled('div')(
  () => css`
    padding: 16px;
    white-space: break-spaces;
    word-wrap: break-word;
  `,
);
