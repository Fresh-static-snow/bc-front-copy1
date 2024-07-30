import { CSSProperties } from 'react';

export type AccordionProps = {
  children?: React.ReactNode;
  summaryLabel: React.ReactNode;
  summaryColor?: CSSProperties['color'];
  reversed?: boolean;
  /**
   * @default '14px 0'
   */
  padding?: CSSProperties['padding'];
  hoverable?: boolean;
  withoutBorder?: boolean;
  dashedBorder?: boolean;
  defaultExpandedStatus?: boolean;
  startRotationPositionDeg?: number;
  endRotationPositionDeg?: number;
};

export type StyledRootProps = {
  $withoutBorder?: boolean;
  $dashedBorder?: boolean;
};

export type StyledAccordionSummary = {
  $reversed: boolean;
  $padding: CSSProperties['padding'];
  $hoverable: boolean;
  $summaryColor: CSSProperties['color'];
  $endRotationPositionDeg: number;
};
