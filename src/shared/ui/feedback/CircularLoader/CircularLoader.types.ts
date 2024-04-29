import { CSSColor, CSSIndents, CSSSize } from '@/shared/types/styles.types';

export type CircularLoaderProps = {
  /**
   * @default '20px'
   */
  size?: CSSSize;
  /**
   * @default secondary_07
   * @description `secondary_07` is the color of the active theme.
   */
  color?: CSSColor;
  width?: CSSSize;
  height?: CSSSize;
  padding?: CSSIndents;
  position?: 'start' | 'center' | 'end';
};

export type StyledRootProps = {
  $width: CSSSize;
  $height: CSSSize;
  $padding: CSSIndents;
  $position: 'start' | 'center' | 'end';
};

export type StyledCircularProgressProps = {
  $size: CSSSize;
  $color: CSSColor;
};
