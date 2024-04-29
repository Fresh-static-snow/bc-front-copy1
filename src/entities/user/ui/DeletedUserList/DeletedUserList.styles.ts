import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 30px;
  `,
);

export const UserListHeader = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0 10px;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
  `,
);

export const ListWrapper = styled('div')(
  () => css`
    width: 100%;
  `,
);

export const TitleWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 0 0 6px;
  `,
);

export const ContentWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 24px;
  `,
);

export const InfoItemList = styled('div')(
  () => css`
    display: flex;
    gap: 10px;
  `,
);
