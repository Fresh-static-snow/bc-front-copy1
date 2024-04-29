import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    padding: 0 30px;
    border-top: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Info = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);
