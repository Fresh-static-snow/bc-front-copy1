import { CSSProperties } from 'react';

export type BodyProps = {
  children: React.ReactNode;
  /**
   * @default false
   */
  scrollActive?: boolean;
  padding?: CSSProperties['padding'];
};

export type StyleRootProps = {
  $padding?: CSSProperties['padding'];
};
