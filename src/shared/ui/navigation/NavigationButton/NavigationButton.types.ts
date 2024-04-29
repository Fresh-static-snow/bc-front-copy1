import { CSSIndents, CSSSize } from '@/shared/types/styles.types';

export type NavigationButtonProps = {
  children?: React.ReactNode;
  tag?: 'button' | 'link';
  /**
   * @default 'primary'
   */
  variant?: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  href?: string;
  /**
   * The string that is compared to the current path to determine whether the button is active.
   */
  activePathString?: string;
  /**
   * If `true`, the button will be active when the current path is an exact match.
   */
  activePathExact?: boolean;
  /**
   * @default '16px'
   */
  padding?: CSSIndents;
  /**
   * @default 'auto'
   */
  width?: CSSSize;
  /**
   * @default 'auto'
   */
  height?: CSSSize;
  innerBorder?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export type StyledRootProps = {
  tag: 'button' | 'link';
  $variant: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  $padding: CSSIndents;
  $width: CSSSize;
  $height: CSSSize;
  $active: boolean;
  $innerBorder?: boolean;
};
