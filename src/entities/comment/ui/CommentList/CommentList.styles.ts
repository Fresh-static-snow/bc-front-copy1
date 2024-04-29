import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    height: calc(100% - 118px - 24px);
    padding: 36px 30px 0;
  `,
);

export const EmptyComments = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_13};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.072px;
  `,
);

export const RootMobile = styled('div')(
  () => css`
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    overflow-y: auto;
  `,
);

export const EmptyCommentsMobile = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.072px;
  `,
);
