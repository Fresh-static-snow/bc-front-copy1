import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { describe, expect, it } from 'vitest';

import { sortTwoDates } from '../../../DatePicker/lib';

dayjs.extend(isSameOrBefore);

describe('ui/utils/sortTwoDates', () => {
  it('sorts dates in ascending order when first date is earlier', () => {
    const date1 = dayjs('2024-01-20');
    const date2 = dayjs('2024-01-25');

    const sortedDates = sortTwoDates(date1, date2);
    expect(sortedDates).toEqual([date1, date2]);
  });

  it('sorts dates in ascending order when second date is earlier', () => {
    const date1 = dayjs('2024-01-25');
    const date2 = dayjs('2024-01-20');

    const sortedDates = sortTwoDates(date1, date2);
    expect(sortedDates).toEqual([date2, date1]);
  });

  it('handles cases where the second date is undefined', () => {
    const date1 = dayjs('2024-01-25');

    const sortedDates = sortTwoDates(date1, undefined);
    expect(sortedDates).toEqual([date1, undefined]);
  });

  it('handles cases where both dates are the same', () => {
    const date1 = dayjs('2024-01-25');
    const date2 = dayjs('2024-01-25');

    const sortedDates = sortTwoDates(date1, date2);
    expect(sortedDates).toEqual([date1, date2]);
  });
});
