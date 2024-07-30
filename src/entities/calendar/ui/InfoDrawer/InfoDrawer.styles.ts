import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledStatusIndicatorProps } from './InfoDrawer.types';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
  `,
);

export const StatusIndicator = styled('div')<StyledStatusIndicatorProps>(
  ({ theme, $stripes, $baseColor }) => css`
    width: 100%;
    height: 18px;
    border-radius: 4px 4px 0px 0px;
    background: ${$stripes
      ? `repeating-linear-gradient(
          -60deg,
          ${$baseColor || theme.appColors.palette_01} 0 15px,
          ${$baseColor || theme.appColors.palette_01}B3 15px 30px
        )`
      : `${$baseColor || theme.appColors.palette_01}`};
  `,
);

export const Content = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-height: calc(100dvh - 100px);
    padding: 20px 24px;
    overflow-y: auto;
  `,
);

export const InfoDrawerHeader = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
  `,
);

export const DisciplineName = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
    font-family: ${theme.appFonts.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.048px;
  `,
);

export const EventName = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
    font-family: ${theme.appFonts.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
);

export const InfoDrawerMatch = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
);

export const InfoDrawerTitle = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.048px;
  `,
);

export const InfoDrawerBody = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
);

export const InfoDrawerRow = styled('div')(
  () => css`
    display: flex;
    align-items: flex-start;
    gap: 7px;
  `,
);

export const InfoDrawerRowIcon = styled('div')(
  ({ theme }) => css`
    & svg {
      width: 16px;
      height: 16px;
    }

    & g {
      fill: ${theme.appColors.secondary_04};
    }

    & path {
      stroke: ${theme.appColors.secondary_04};
    }
  `,
);

export const InfoDrawerRowText = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.052px;
  `,
);

export const Category = styled('div')(() => css``);

export const CategoryTitle = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.052px;
    margin: 0 0 14px;
  `,
);

export const CategoryList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
);

export const CategoryItem = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 7px;
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.052px;
  `,
);

export const CategoryStatus = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.052px;
  `,
);

export const Bold = styled('span')(
  () => css`
    font-weight: 600;
  `,
);
