import { CSSProperties, ReactNode } from 'react';

export type TextColorProps = {
  text: ReactNode;
  /**
   * @default 400
   */
  fontWeight?: CSSProperties['fontWeight'];
  /**
   * @default 15px
   */
  lineHeight?: CSSProperties['lineHeight'];
  /**
   * @default 12px
   */
  fontSize?: CSSProperties['fontSize'];
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
  /**
   * If true, the text will be limited by width.
   * @default false
   */
  limitedWidth?: boolean;
};

export type StyledRootProps = {
  $fontWeight: CSSProperties['fontWeight'];
  $fontSize: CSSProperties['fontSize'];
  $lineHeight: CSSProperties['lineHeight'];
  $baseColor: CSSProperties['color'];
  $secondaryColor: CSSProperties['color'];
  $limitedWidth: boolean;
};
