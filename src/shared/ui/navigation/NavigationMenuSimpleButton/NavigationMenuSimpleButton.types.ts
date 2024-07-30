import { CSSProperties } from 'react';

export type NavigationMenuSimpleButtonProps = {
  children?: React.ReactNode;
  linkPath: string;
  activePathExact?: boolean;
  variant?: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  padding?: CSSProperties['padding'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  count?: number | string;
};

export type StyledContentProps = {
  $fontSize: CSSProperties['fontSize'];
  $fontWeight: CSSProperties['fontWeight'];
};
