import { CSSProperties } from 'react';

import { HEX } from '@/shared/types/styles.types';

export type BackgroundColorProps = {
  children?: React.ReactNode;
  /**
   * Base gradient color layer of the component.
   * @default palette_01
   * @description `palette_01` is the color of the active theme.
   */
  baseColor?: HEX;
  /**
   * If `true`, the component will have a color indicator.
   * @default false
   */
  colorIndicator?: boolean;
  /**
   * If `true`, the component will have stripes.
   * @default false
   * @description The stripes are created with a linear gradient.
   */
  stripes?: boolean;
  /**
   * If `true`, the component will have a border wrapper.
   * @default false
   */
  borderWrapper?: boolean;
  borderRadius?: boolean;
  customStyles?: CSSProperties;
};

export type StyledRootProps = {
  $baseColor: HEX;
  $stripes: boolean;
  $colorIndicator: boolean;
  $borderWrapper: boolean;
  $borderRadius: boolean;
};

export type StyledColorIndicatorProps = {
  $baseColor: HEX;
};
