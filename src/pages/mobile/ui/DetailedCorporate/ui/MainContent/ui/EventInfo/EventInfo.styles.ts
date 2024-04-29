import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
  `,
);

export const CoverWrapper = styled('div')(
  () => css`
    position: relative;
    width: 100%;
    min-height: 100px;
  `,
);

export const Cover = styled('img')(
  () => css`
    width: 100%;
  `,
);

export const CoverPlaceholder = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 65dvw;
    background-color: ${theme.appColors.secondary_03};
  `,
);

export const AnchorsWrapper = styled('div')(
  () => css`
    position: absolute;
    bottom: 7%;
    right: 5%;
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);

export const General = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
  `,
);

export const InnerWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  `,
);

export const DateAndLogo = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 26px;
    color: ${theme.appColors.primary_02};
  `,
);

export const Location = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${theme.appColors.primary_02};
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 20px;
    color: ${theme.appColors.primary_02};
  `,
);

export const LogoWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid ${theme.appColors.primary_03};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Logo = styled('img')(
  () => css`
    max-width: 80%;
    max-height: 50px;
  `,
);
