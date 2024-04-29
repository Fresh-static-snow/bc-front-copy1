import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    margin-top: 124px;
  `,
);

export const DateSeparator = styled('div')(
  ({ theme }) => css`
    display: grid;
    place-items: center;
    border-top: 1px solid ${theme.appColors.primary_03};
    height: 50px;
    width: 100%;
  `,
);

export const DateSeparatorContent = styled('div')(
  ({ theme }) => css`
    font-weight: 600;
    font-size: 18px;
    font-family: 'Inter';

    /* text-align: center; */
  `,
);
