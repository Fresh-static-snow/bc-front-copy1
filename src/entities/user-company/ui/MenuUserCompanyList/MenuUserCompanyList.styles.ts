import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ItemList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
  `,
);

export const Count = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 14px;
    font-weight: 600;
  `,
);
