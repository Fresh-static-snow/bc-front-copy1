import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const UsersInfoTipContent = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 210px;
    padding: 14px 24px;
  `,
);

export const UserList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
);

export const UserItem = styled('div')(
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

export const Bold = styled('span')(
  () => css`
    font-weight: 600;
  `,
);
