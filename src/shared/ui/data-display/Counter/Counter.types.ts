import { HEX } from '@/shared/types/styles.types';

export type CounterProps = {
  count: string | number;
  /**
   * @default 99
   */
  maxCount?: string | number;
  color?: HEX;
  bgColor?: HEX;
};

export type StyledRootProps = {
  $bgColor: HEX;
  $color: HEX;
};
