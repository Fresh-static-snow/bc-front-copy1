import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    padding: 0 30px;
    background: ${theme.appColors.secondary_11};
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

export const Filters = styled('div')(
  () => css`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
);

export const RightPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 30px;
  `,
);
