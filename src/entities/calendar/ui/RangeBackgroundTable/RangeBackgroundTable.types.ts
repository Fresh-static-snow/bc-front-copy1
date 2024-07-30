import { CSSProperties } from 'react';

export type RangeBackgroundTableProps = {
  tableHeight?: string;
  tablePaddings?: CSSProperties['padding'];
  columnsCount: number;
  children?: React.ReactNode;
  isMobile?: boolean;
};

export type StyledRootProps = {
  $height?: string;
  $padding?: CSSProperties['padding'];
  $isMobile?: boolean;
};

export type StyledTableContentProps = {
  $columnsCount: number;
};

export type StyledTableRowsProps = {
  $isMobile?: boolean;
};
