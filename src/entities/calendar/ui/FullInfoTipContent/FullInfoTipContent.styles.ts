import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 280px;
    padding: 20px 24px 30px;
  `,
);

export const FullInfoTipContentHeader = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
);

export const DisciplineName = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
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
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
);

export const FullInfoTipContentBody = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
);

export const FullInfoTipContentRow = styled('div')(
  () => css`
    display: flex;
    align-items: flex-start;
    gap: 7px;
  `,
);

export const FullInfoTipContentRowIcon = styled('div')(
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

export const FullInfoTipContentRowText = styled('div')(
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
