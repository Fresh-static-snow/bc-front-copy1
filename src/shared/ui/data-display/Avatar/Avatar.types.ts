import { CSSProperties } from 'react';

import { CSSColor, CSSSize, CSSWeight } from '@/shared/types/styles.types';

export type AvatarProps = {
  name?: string;
  image?: string;
  /**
   * Width and height of the component.
   * @default '20px'
   */
  size?: CSSSize;
  /**
   * @default '10px'
   */
  fontSize?: CSSSize;
  /**
   * @default '600'
   */
  fontWeight?: CSSWeight;
  borderColor?: CSSColor;
  additionalBorder?: CSSProperties['border'];
  crownIcon?: boolean;
  crownInnerStrokeColor?: CSSProperties['stroke'];
  crownOuterStrokeColor?: CSSProperties['stroke'];
  /**
   * @default 'transparent'
   */
  backgroundColor?: CSSColor;
  /**
   * @default primary_05
   * @description `primary_05` is the color of the active theme.
   */
  textColor?: CSSColor;
  /**
   * @default false
   */
  withShadow?: boolean;
  /**
   * @default secondary_12
   * @description `secondary_12` is the color of the active theme.
   */
  shadowColor?: CSSColor;
};

export type StyledRootProps = {
  $size: CSSSize;
};

export type StyledAvatarProps = {
  $size: CSSSize;
  $borderColor: CSSColor;
  $backgroundColor: CSSColor;
  $fontSize: CSSSize;
  $fontWeight: CSSWeight;
  $textColor: CSSColor;
  $withShadow: boolean;
  $shadowColor: CSSColor;
};

export type StyledAdditionalBorderProps = {
  $border: CSSProperties['border'];
};

export type StyledAdditionalIconWrapperProps = {
  $innerStroke: CSSProperties['stroke'];
  $outerStroke: CSSProperties['stroke'];
};
