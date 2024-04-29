import { CSSIndents } from '@/shared/types/styles.types';

export type RangeBackgroundTableProps = {
  tableHeight?: string;
  tablePaddings?: CSSIndents;
  columnsCount: number;
  children?: React.ReactNode;
  isMobile?: boolean;
};

export type StyledRootProps = {
  $height?: string;
  $padding?: CSSIndents;
  $isMobile?: boolean;
};

export type StyledTableContentProps = {
  $columnsCount: number;
};

export type StyledTableRowsProps = {
  $isMobile?: boolean;
};
