import { CSSProperties } from 'react';

export type CounterProps = {
  count: string | number;
  /**
   * @default 99
   */
  maxCount?: string | number;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
};

export type StyledRootProps = {
  $color: CSSProperties['color'];
  $bgColor: CSSProperties['backgroundColor'];
};
