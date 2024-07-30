import { CSSProperties } from 'react';

export type AvatarProps = {
  name?: string;
  image?: string;
  /**
   * Width and height of the component.
   * @default '20px'
   */
  size?: CSSProperties['width'] | CSSProperties['height'];
  /**
   * @default '10px'
   */
  fontSize?: CSSProperties['fontSize'];
  /**
   * @default '600'
   */
  fontWeight?: CSSProperties['fontWeight'];
  borderColor?: CSSProperties['borderColor'];
  additionalBorder?: CSSProperties['border'];
  crownIcon?: boolean;
  crownInnerStrokeColor?: CSSProperties['stroke'];
  crownOuterStrokeColor?: CSSProperties['stroke'];
  /**
   * @default 'transparent'
   */
  backgroundColor?: CSSProperties['backgroundColor'];
  /**
   * @default primary_05
   * @description `primary_05` is the color of the active theme.
   */
  textColor?: CSSProperties['color'];
  /**
   * @default false
   */
  withShadow?: boolean;
  /**
   * @default secondary_12
   * @description `secondary_12` is the color of the active theme.
   */
  shadowColor?: CSSProperties['color'];
};

export type StyledRootProps = {
  $size: CSSProperties['width'] | CSSProperties['height'];
};

export type StyledAvatarProps = {
  $size: CSSProperties['width'] | CSSProperties['height'];
  $borderColor: CSSProperties['borderColor'];
  $backgroundColor: CSSProperties['backgroundColor'];
  $fontSize: CSSProperties['fontSize'];
  $fontWeight: CSSProperties['fontWeight'];
  $textColor: CSSProperties['color'];
  $withShadow: boolean;
  $shadowColor: CSSProperties['color'];
};

export type StyledAdditionalBorderProps = {
  $border: CSSProperties['border'];
};

export type StyledAdditionalIconWrapperProps = {
  $innerStroke: CSSProperties['stroke'];
  $outerStroke: CSSProperties['stroke'];
};
