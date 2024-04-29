import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    min-height: 46px;
    padding: 6px 0;
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-weight: 400;
    border-bottom: 1px solid ${theme.appColors.primary_03};

    &:first-of-type {
      border-top: 1px solid ${theme.appColors.primary_03};
    }
  `,
);

export const LeftPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);

export const RightPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);
