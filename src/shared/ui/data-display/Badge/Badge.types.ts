import { CSSColor, CSSSize } from '@/shared/types/styles.types';

export type BadgeProps = {
  text: string;
  /**
   * Base gradient color layer of the component.
   * @default secondary_10
   * @description `secondary_10` is the color of the active theme.
   */
  baseColor?: CSSColor;
  /**
   * Secondary gradient color layer of the component.
   */
  secondaryColor: CSSColor;
  rotateDeg?: number;
  height?: CSSSize;
  right?: CSSSize;
};

export type StyledRootProps = {
  $height?: CSSSize;
};

export type StyledBodyProps = {
  $baseColor: CSSColor;
  $secondaryColor: CSSColor;
  $right?: CSSSize;
};
