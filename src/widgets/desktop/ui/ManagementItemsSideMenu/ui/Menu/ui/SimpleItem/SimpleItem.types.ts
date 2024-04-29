import { CSSIndents, CSSSize, CSSWeight } from '@/shared/types/styles.types';

export type SimpleItemProps = {
  children?: React.ReactNode;
  linkPath: string;
  activePathExact?: boolean;
  variant?: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  padding?: CSSIndents;
  fontSize?: CSSSize;
  fontWeight?: CSSWeight;
  count?: number | string;
};

export type IStyledContentProps = {
  $fontSize: CSSSize;
  $fontWeight: CSSWeight;
};
