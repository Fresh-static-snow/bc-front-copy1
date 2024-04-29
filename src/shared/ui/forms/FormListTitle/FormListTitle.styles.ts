import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    width: 100%;
    padding: 30px 0 15px;
    margin: 0 0 15px;
    border-top: 1px solid ${theme.appColors.primary_03};
    border-bottom: 1px dashed ${theme.appColors.primary_03};
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: ${theme.appColors.primary_02};
  `,
);
