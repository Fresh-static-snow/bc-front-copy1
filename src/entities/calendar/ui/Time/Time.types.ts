import { CSSProperties } from 'react';

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
  color: CSSProperties['color'];
};
