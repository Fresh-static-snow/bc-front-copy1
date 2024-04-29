import { RangeType } from '@/shared/ui/inputs/DatePicker/types';

export type CalendarButtonProps = {
  isBig?: boolean;
  label: string;
  isOtherPeriod: boolean;
  isCurrentDate: boolean;
  isActiveDate: boolean;
  /**
   * @default 'neutral'
   */
  rangeType?: RangeType;
  onClick: () => void;
};

export type StyledRootProps = {
  $rangeType: RangeType;
};

export type StyledButtonProps = {
  $isBig?: boolean;
  $isCurrentDate?: boolean;
  $isActiveDate?: boolean;
};

export type StyledDateProps = {
  $isCurrentDate?: boolean;
  $isActiveDate?: boolean;
  $isOtherPeriod?: boolean;
};
