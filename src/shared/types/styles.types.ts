export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
export type CSSColor = RGB | RGBA | HEX;

export type CSSUnit = 'px' | '%' | 'vw' | 'vh' | 'dvw' | 'dvh';
export type CSSSize = `${number}${CSSUnit}`;

export type CSSIndentsUnit = 'px' | '%';
export type CSSIndentsSize = `${number}${CSSIndentsUnit}` | '0';
export type CSSIndents =
  | `${CSSIndentsSize}`
  | `${CSSIndentsSize} ${CSSIndentsSize}`
  | `${CSSIndentsSize} ${CSSIndentsSize} ${CSSIndentsSize}`
  | `${CSSIndentsSize} ${CSSIndentsSize} ${CSSIndentsSize} ${CSSIndentsSize}`;

export type CSSWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
