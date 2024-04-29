import { Dayjs } from 'dayjs';

export type RangeType = 'range-start' | 'range-end' | 'in-range' | 'neutral';

export type Day = {
  /**
   * The key of the day for react mapping.
   */
  key: string;
  isOtherMonth: boolean;
  isToday: boolean;
  isActiveDay: boolean;
  rangeType: RangeType;
  /**
   * The dayjs object of the day.
   */
  day: Dayjs;
};

export type Month = {
  /**
   * The key of the month for react mapping.
   */
  key: string;
  isOtherYear: boolean;
  isCurrentMonth: boolean;
  isActiveMonth: boolean;
  rangeType: RangeType;
  /**
   * The dayjs object of the month.
   */
  month: Dayjs;
};

export type Year = {
  /**
   * The key of the year for react mapping.
   */
  key: number;
  isOtherDecade: boolean;
  isCurrentYear: boolean;
  isActiveYear: boolean;
  /**
   * The dayjs object of the year.
   */
  year: Dayjs;
};
