import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 4px;
    width: 100%;
    min-height: 76px;
    padding: 8px 0;
    border-bottom: 1px dashed ${theme.appColors.primary_03};
  `,
);

export const RowList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-height: 76px;
  `,
);
