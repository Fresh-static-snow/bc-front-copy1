import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    padding: 0 30px;
    background: ${theme.appColors.primary_05};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);
