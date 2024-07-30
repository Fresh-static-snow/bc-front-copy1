import { CSSProperties } from 'react';

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
  padding?: CSSProperties['padding'];
  /**
   * @default 'auto'
   */
  width?: CSSProperties['width'];
  /**
   * @default 'auto'
   */
  height?: CSSProperties['height'];
  innerBorder?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export type StyledRootProps = {
  tag: 'button' | 'link';
  $variant: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  $padding: CSSProperties['padding'];
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
  $active: boolean;
  $innerBorder?: boolean;
};
