import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 30px 15px;
    background: ${theme.appColors.primary_06};
    border-radius: 10px 10px 0px 0px;
    border-bottom: 1px solid ${theme.appColors.primary_03};
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: ${theme.appColors.primary_02};
  `,
);
