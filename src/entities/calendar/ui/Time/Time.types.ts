import { CSSColor } from '@/shared/types/styles.types';

export type TimeProps = {
  /**
   * Start time in format HH:mm.
   */
  startTime: string;
  /**
   * End time in format HH:mm.
   */
  endTime?: string;
  /**
   * Color of time component.
   */
  color: CSSColor;
};
