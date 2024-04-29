import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 10px;
  `,
);

export const Content = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
);

export const Header = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 34px;
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    margin: 0 0 0 15px;
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    color: ${theme.appColors.primary_02};
  `,
);

export const Footer = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
);
