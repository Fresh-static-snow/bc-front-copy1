import { Dayjs, OpUnitType } from 'dayjs';

import { RangeType } from '@/shared/ui/inputs/DatePicker/types';

import { sortTwoDates } from '../sortTwoDates/sortTwoDates.util';

/**
 * Check the range type of the date.
 * @param date The dayjs object of the date.
 * @param activeDateFirst The dayjs object of the first active date.
 * @param activeDateSecond The dayjs object of the second active date.
 * @param until The unit of time to check.
 */
export const checkRangeType = (
  date: Dayjs,
  activeDateFirst: Dayjs,
  activeDateSecond: Dayjs,
  until: OpUnitType,
): RangeType => {
  const [startDate, endDate] = sortTwoDates(activeDateFirst, activeDateSecond);

  if (endDate && date.isSame(startDate, until)) {
    return 'range-start';
  }
  if (endDate && date.isSame(endDate, until)) {
    return 'range-end';
  }
  if (endDate && date.isBetween(startDate, endDate, until)) {
    return 'in-range';
  }
  return 'neutral';
};
