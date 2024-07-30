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

export const Images = styled('div')(
  () => css`
    position: relative;
    width: 100%;
  `,
);

export const Cover = styled('img')(
  () => css`
    width: 100%;
  `,
);

export const LogoWrapper = styled('div')(
  () => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 13.2% 15.5%;
  `,
);

export const Logo = styled('img')(
  () => css`
    width: 100%;
  `,
);

export const General = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 0 80px;
    text-align: center;
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: ${theme.appColors.primary_02};
  `,
);

export const EventName = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-weight: 400;
    line-height: 15.73px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.secondary_04};
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${theme.appColors.primary_02};
  `,
);

export const AdditionalWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: calc(100% - 60px);
    padding: 30px 0;
    border-top: 1px solid ${theme.appColors.primary_03};
  `,
);

export const DisciplineLogo = styled('img')(
  () => css`
    width: 27%;
  `,
);
