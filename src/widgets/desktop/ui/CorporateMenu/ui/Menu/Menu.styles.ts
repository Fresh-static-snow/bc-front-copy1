import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TopMenu = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    padding: 0 30px;
    background: ${theme.appColors.primary_04};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);

export const BackButtonAdditional = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    color: ${theme.appColors.primary_02};
  `,
);

export const EventTitle = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 13px;
    color: ${theme.appColors.primary_02};
  `,
);
