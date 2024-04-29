import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    padding: 30px;
    border-radius: 4px;
    background: ${theme.appColors.primary_05};
    overflow: hidden;
    border: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.secondary_04};
    font-size: 13px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.052px;
  `,
);

export const Value = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.primary_02};
    font-size: 96px;
    font-weight: 400;
    line-height: 96px;
  `,
);
