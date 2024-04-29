import dayjs, { Dayjs } from 'dayjs';

import { Year } from '@/shared/ui/inputs/DatePicker/types';

/**
 * Generate list of years for the calendar view.
 * @param activeDecade The year of the active decade.
 * @param activeDate The dayjs object of the active date.
 */
export const generateDecades = (activeDecade: number, activeDate: Dayjs): Year[] => {
  const yearList: Year[] = [];

  for (let i = 0; i < 16; i += 1) {
    const currentYear = activeDecade - 2 + i;

    yearList.push({
      // * Keys for react mapping.
      key: currentYear,
      // * The year is in the same view but belongs to a different decade.
      isOtherDecade: Math.floor(currentYear / 10) * 10 !== activeDecade,
      // * Current year.
      isCurrentYear: currentYear === +dayjs().format('YYYY'),
      // * Active year.
      isActiveYear: currentYear === +activeDate.format('YYYY'),
      // * Year signature.
      year: dayjs(`${currentYear}-01-01`),
    });
  }

  return yearList;
};
