import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 50%;
  `,
);

export const ItemLabel = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.secondary_04};
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.052px;
  `,
);

export const ItemValue = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.primary_02};
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.052px;
  `,
);

export const List = styled('ul')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 14px;
  `,
);

export const ListElement = styled('li')(
  ({ theme }) => css`
    position: relative;
    padding: 0 0 0 16px;

    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      width: 6px;
      height: 6px;
      background-color: ${theme.appColors.primary_02};
      border-radius: 35px;
    }
  `,
);

export const Count = styled('li')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.secondary_04};
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.052px;
  `,
);
