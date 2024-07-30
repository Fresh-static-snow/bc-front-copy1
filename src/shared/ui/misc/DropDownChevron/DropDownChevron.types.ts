import { CSSProperties } from 'react';

export type DropDownChevronProps = {
  active?: boolean;
  /**
   * @default '12px'
   */
  size?: CSSProperties['height'] | CSSProperties['width'];
};

export type StyledRootProps = {
  $active: boolean;
  $size: CSSProperties['height'] | CSSProperties['width'];
};
