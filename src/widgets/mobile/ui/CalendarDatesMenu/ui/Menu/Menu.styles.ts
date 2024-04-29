import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    z-index: 1201; // * 1200 is the z-index of the drawer
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    width: 100%;
    height: 68px;
    padding: 24px 20px;
    background: ${theme.appColors.primary_02};
  `,
);

export const LeftPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 10px;
  `,
);

export const RightPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 16px;
  `,
);
