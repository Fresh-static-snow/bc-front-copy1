import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    padding: 40px 30px 40px 54px;
  `,
);

export const DescriptionTitle = styled('div')(
  ({ theme }) => css`
    width: 100%;
    padding: 10px 0;
    margin: 0 0 2px;
    border-bottom: 1px solid ${theme.appColors.primary_03};
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${theme.appColors.primary_02};
  `,
);

export const DescriptionItem = styled('div')(
  ({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    &:not(:last-of-type) > div:first-of-type {
      border-bottom: 1px dashed ${theme.appColors.primary_03};
    }
  `,
);

export const DescriptionItemLabel = styled('div')(
  ({ theme }) => css`
    padding: 8px 0;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-transform: capitalize;
    color: ${theme.appColors.secondary_04};
  `,
);

export const DescriptionItemValue = styled('div')(
  ({ theme }) => css`
    padding: 8px 0;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_02};
    word-wrap: break-word;
  `,
);
