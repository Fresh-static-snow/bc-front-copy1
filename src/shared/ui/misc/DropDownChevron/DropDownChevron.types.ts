import { CSSSize } from '@/shared/types/styles.types';

export type DropDownChevronProps = {
  active?: boolean;
  /**
   * @default '12px'
   */
  size?: CSSSize;
};

export type StyledRootProps = {
  $active: boolean;
  $size: CSSSize;
};
