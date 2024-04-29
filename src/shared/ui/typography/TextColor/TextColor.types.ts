import { ReactNode } from 'react';

import { CSSColor, CSSSize, CSSWeight } from '@/shared/types/styles.types';

export type TextColorProps = {
  text: ReactNode;
  /**
   * @default 400
   */
  fontWeight?: CSSWeight;
  /**
   * @default 15px
   */
  lineHeight?: CSSSize;
  /**
   * @default 12px
   */
  fontSize?: CSSSize;
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
  /**
   * If true, the text will be limited by width.
   * @default false
   */
  limitedWidth?: boolean;
};

export type StyledRootProps = {
  $fontWeight: CSSWeight;
  $fontSize: CSSSize;
  $lineHeight: CSSSize;
  $baseColor: CSSColor;
  $secondaryColor: CSSColor;
  $limitedWidth: boolean;
};
