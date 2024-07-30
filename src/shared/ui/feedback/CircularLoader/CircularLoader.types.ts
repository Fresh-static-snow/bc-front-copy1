import { CSSProperties } from 'react';

export type CircularLoaderProps = {
  /**
   * @default '20px'
   */
  size?: CSSProperties['width'] | CSSProperties['height'];
  /**
   * @default secondary_07
   * @description `secondary_07` is the color of the active theme.
   */
  color?: CSSProperties['color'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  padding?: CSSProperties['padding'];
  position?: 'start' | 'center' | 'end';
};

export type StyledRootProps = {
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
  $padding: CSSProperties['padding'];
  $position: 'start' | 'center' | 'end';
};

export type StyledCircularProgressProps = {
  $size: CSSProperties['width'] | CSSProperties['height'];
  $color: CSSProperties['color'];
};
