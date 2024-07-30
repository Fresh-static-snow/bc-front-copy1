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

export const Header = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
);

export const HeaderName = styled('div')(
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

export const Title = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
);

export const Control = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
);

export const Body = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
);

export const ContentRow = styled('div')(
  () => css`
    display: flex;
    align-items: flex-start;
    gap: 7px;
  `,
);

export const ContentRowIcon = styled('div')(
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

export const ContentRowText = styled('div')(
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

export const Bold = styled('span')(
  () => css`
    font-weight: 600;
  `,
);

export const Gray = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
  `,
);
