import { CSSProperties } from 'react';

export type SectionProps = {
  children?: React.ReactNode;
  width?: CSSProperties['width'];
  /**
   * The number of fragments that the element will occupy in the page layout.
   * @default 1
   */
  fragments?: number;
  /**
   * @default false
   */
  scrollActive?: boolean;
  disableTracksWidthCompensation?: boolean;
  /**
   * @default false
   */
  borderLeft?: boolean;
  borderLeftType?: 'solid' | 'dashed';
  /**
   * @default false
   */
  borderRight?: boolean;
  borderRightType?: 'solid' | 'dashed';
  /**
   * @default primary_05
   * @description `primary_05` is the color of the active theme.
   */
  backgroundColor?: CSSProperties['backgroundColor'];
};

export type StyledRootProps = {
  $width: CSSProperties['width'];
  $fragments: number;
  $borderLeft?: boolean;
  $borderLeftType?: 'solid' | 'dashed';
  $borderRight?: boolean;
  $borderRightType?: 'solid' | 'dashed';
  $backgroundColor?: CSSProperties['backgroundColor'];
};
