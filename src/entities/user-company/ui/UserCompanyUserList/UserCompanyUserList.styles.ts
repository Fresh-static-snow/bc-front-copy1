import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const UserListHeader = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 10px;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
  `,
);

export const Separator = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 1px;
    background: ${theme.appColors.primary_04};
  `,
);

export const UserList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 7px 0;
  `,
);
