import dayjs, { Dayjs } from 'dayjs';

import { Day } from '@/shared/ui/inputs/DatePicker/types';

import { checkRangeType } from '../checkRangeType/checkRangeType.util';

/**
 * Generate list of days for the calendar view.
 * @param activeMonth The dayjs object of the active month.
 * @param activeDateFirst The dayjs object of the first active date.
 * @param activeDateSecond The dayjs object of the second active date.
 */
const generateDayList = (
  activeMonth: Dayjs,
  activeDateFirst: Dayjs,
  activeDateSecond?: Dayjs,
): Day[] => {
  // * Get first day of current month.
  const monthStart = activeMonth.startOf('month');
  // * Get last day of current month.
  const monthEnd = activeMonth.endOf('month');
  // * Get first day of calendar view.
  const startDate = monthStart.startOf('week');
  // * Get last day of calendar view.
  const endDate = monthEnd.endOf('week');

  const dayList: Day[] = [];

  // * Creating list of visible dates.
  let day = startDate;
  while (day.isBefore(endDate) || dayList.length < 42) {
    dayList.push({
      // * Keys for react mapping.
      key: day.format(),
      // * The day is in the same view but belongs to a different month.
      isOtherMonth: day.month() !== activeMonth.month(),
      // * Current day.
      isToday: day.isSame(dayjs(), 'day'),
      // * Check day position in active month.
      rangeType: checkRangeType(day, activeDateFirst, activeDateSecond, 'day'),
      // * Active day.
      isActiveDay:
        day.isSame(activeDateFirst, 'day') ||
        (activeDateSecond && day.isSame(activeDateSecond, 'day')),
      // * Day signature.
      day,
    });
    day = day.add(1, 'day');
  }

  return dayList;
};

/**
 * Generate rows of days for the calendar view.
 * @param dayList The list of days for the calendar view.
 */
const generateWeekRows = (dayList: Day[]): Day[][] =>
  // * Splitting the list of days into rows.
  dayList.reduce((weekRows: Day[][], day, index) => {
    // * If the index is a multiple of 7, then it is the beginning of a new row.
    if (index % 7 === 0) {
      const row = dayList.slice(index, index + 7);
      weekRows.push(row);
    }

    return weekRows;
  }, []);

/**
 * Generate days for the calendar view.
 * @param activeMonth The dayjs object of the active month.
 * @param activeDateFirst The dayjs object of the first active date.
 * @param activeDateSecond The dayjs object of the second active date.
 */
export const generateDays = (
  activeMonth: Dayjs,
  activeDateFirst: Dayjs,
  activeDateSecond?: Dayjs,
): Day[][] => {
  // * Generate list of days for the calendar view.
  const dayList = generateDayList(activeMonth, activeDateFirst, activeDateSecond);
  // * Generate rows of days for the calendar view.
  const weekRows = generateWeekRows(dayList);

  return weekRows;
};
