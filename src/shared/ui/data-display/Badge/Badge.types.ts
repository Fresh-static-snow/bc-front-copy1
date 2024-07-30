import { CSSProperties } from 'react';

export type BadgeProps = {
  text: string;
  /**
   * Base gradient color layer of the component.
   * @default secondary_10
   * @description `secondary_10` is the color of the active theme.
   */
  baseColor?: CSSProperties['color'];
  /**
   * Secondary gradient color layer of the component.
   */
  secondaryColor: CSSProperties['color'];
  rotateDeg?: number;
  height?: CSSProperties['height'];
  right?: CSSProperties['right'];
};

export type StyledRootProps = {
  $height?: CSSProperties['height'];
};

export type StyledBodyProps = {
  $baseColor: CSSProperties['color'];
  $secondaryColor: CSSProperties['color'];
  $right?: CSSProperties['right'];
};
