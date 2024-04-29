import { CSSIndents, HEX } from '@/shared/types/styles.types';

export type AccordionProps = {
  children?: React.ReactNode;
  summaryLabel: React.ReactNode;
  summaryColor?: HEX;
  reversed?: boolean;
  /**
   * @default '14px 0'
   */
  padding?: CSSIndents;
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
  $padding: string;
  $hoverable: boolean;
  $summaryColor: HEX;
  $endRotationPositionDeg: number;
};
