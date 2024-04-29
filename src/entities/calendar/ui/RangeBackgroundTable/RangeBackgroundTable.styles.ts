import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  StyledRootProps,
  StyledTableContentProps,
  StyledTableRowsProps,
} from './RangeBackgroundTable.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $height, $padding, $isMobile }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 4px;
    padding: ${$padding || '0'};
    width: 100%;
    height: ${$height || '100dvh'};

    ${$isMobile
      ? css`
          width: 1190px;
          ms-overflow-style: 'none'; /* IE and Edge */
          scrollbar-width: 'none'; /* Firefox */
        `
      : ''}
  `,
);

export const TableContent = styled('div')<StyledTableContentProps>(
  ({ $columnsCount }) => css`
    display: grid;
    grid-template-columns: repeat(${$columnsCount}, 1fr);
    height: 100%;
  `,
);

export const TableColumn = styled('div')(
  ({ theme }) => css`
    height: 100%;
    box-shadow: 1px 0 0 ${theme.appColors.primary_03};
  `,
);

export const TableRows = styled('div')<StyledTableRowsProps>(
  ({ $isMobile }) => css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    ${$isMobile
      ? css`
          overflow-y: auto;
        `
      : ''}
  `,
);
