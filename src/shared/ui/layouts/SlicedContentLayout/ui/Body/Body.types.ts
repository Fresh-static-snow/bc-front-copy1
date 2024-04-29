import { CSSIndents } from '@/shared/types/styles.types';

export type BodyProps = {
  children: React.ReactNode;
  /**
   * @default false
   */
  scrollActive?: boolean;
  padding?: CSSIndents;
};

export type StyleRootProps = {
  $padding?: CSSIndents;
};
