import { CSSProperties } from 'react';

export type SimpleItemProps = {
  children?: React.ReactNode;
  linkPath: string;
  activePathExact?: boolean;
  variant?: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  padding?: CSSProperties['padding'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  count?: number | string;
};

export type IStyledContentProps = {
  $fontSize: CSSProperties['fontSize'];
  $fontWeight: CSSProperties['fontWeight'];
};
