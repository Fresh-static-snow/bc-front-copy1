import dayjs, { Dayjs } from 'dayjs';

import { Month } from '@/shared/ui/inputs/DatePicker/types';

import { checkRangeType } from '../checkRangeType/checkRangeType.util';

/**
 * Generate list of months for the calendar view.
 * @param activeYear The dayjs object of the active year.
 * @param activeDateFirst The dayjs object of the first active date.
 * @param activeDateSecond The dayjs object of the second active date.
 */
const generateMonthList = (
  activeYear: Dayjs,
  activeDateFirst: Dayjs,
  activeDateSecond?: Dayjs,
): Month[] => {
  // * Get first day of current year.
  const yearStart = activeYear.startOf('year');

  const monthList: Month[] = [];

  // * Creating list of visible months.
  let month = yearStart;

  while (monthList.length < 16) {
    monthList.push({
      // * Keys for react mapping.
      key: month.format(),
      // * The month is in the same view but belongs to a different year.
      isOtherYear: month.year() !== activeYear.year(),
      // * Current month.
      isCurrentMonth: month.isSame(dayjs(), 'month'),
      // * Check month position in active quarter.
      rangeType: checkRangeType(month, activeDateFirst, activeDateSecond, 'month'),
      // * Active month.
      isActiveMonth:
        month.isSame(activeDateFirst, 'month') ||
        (activeDateSecond && month.isSame(activeDateSecond, 'month')),
      // * Month signature.
      month,
    });
    month = month.add(1, 'month');
  }

  return monthList;
};

/**
 * Generate rows of months for the calendar view.
 * @param monthList The list of months for the calendar view.
 */
const generateYearRows = (monthList: Month[]): Month[][] =>
  // * Creating list of visible months.
  monthList.reduce((monthRows: Month[][], day, index) => {
    // * If the index is a multiple of 4, then we create a new row.
    if (index % 4 === 0) {
      const row = monthList.slice(index, index + 4);
      monthRows.push(row);
    }

    return monthRows;
  }, []);

/**
 * Generate months for the calendar view.
 * @param activeYear The dayjs object of the active year.
 * @param activeDateFirst The dayjs object of the first active date.
 * @param activeDateSecond The dayjs object of the second active date.
 */
export const generateMonths = (
  activeYear: Dayjs,
  activeDateFirst: Dayjs,
  activeDateSecond?: Dayjs,
): Month[][] => {
  // * Generate list of months for the calendar view.
  const monthList = generateMonthList(activeYear, activeDateFirst, activeDateSecond);
  // * Generate rows of months for the calendar view.
  const yearRows = generateYearRows(monthList);

  return yearRows;
};
