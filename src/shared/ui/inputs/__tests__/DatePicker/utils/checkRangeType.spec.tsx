import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { describe, expect, it } from 'vitest';

import { checkRangeType } from '../../../DatePicker/lib';

dayjs.extend(isBetween);

describe('ui/utils/checkRangeType', () => {
  it('returns "range-start" when date is the same as the start date', () => {
    const date = dayjs('2024-01-24');
    const activeDateFirst = dayjs('2024-01-24');
    const activeDateSecond = dayjs('2024-01-26');
    const until = 'day';

    expect(checkRangeType(date, activeDateFirst, activeDateSecond, until)).toBe('range-start');
  });

  it('returns "range-end" when date is the same as the end date', () => {
    const date = dayjs('2024-01-26');
    const activeDateFirst = dayjs('2024-01-24');
    const activeDateSecond = dayjs('2024-01-26');
    const until = 'day';

    expect(checkRangeType(date, activeDateFirst, activeDateSecond, until)).toBe('range-end');
  });

  it('returns "in-range" when date is between the start and end dates', () => {
    const date = dayjs('2024-01-25');
    const activeDateFirst = dayjs('2024-01-24');
    const activeDateSecond = dayjs('2024-01-26');
    const until = 'day';

    expect(checkRangeType(date, activeDateFirst, activeDateSecond, until)).toBe('in-range');
  });

  it('returns "neutral" when there is no end date or date is outside the range', () => {
    const date = dayjs('2024-01-23');
    const activeDateFirst = dayjs('2024-01-24');
    const until = 'day';

    expect(checkRangeType(date, activeDateFirst, null, until)).toBe('neutral');

    const dateOutsideRange = dayjs('2024-01-27');
    expect(checkRangeType(dateOutsideRange, activeDateFirst, null, until)).toBe('neutral');
  });

  it('handles different units of time for comparison', () => {
    const date = dayjs('2024-01-24');
    const activeDateFirst = dayjs('2024-01-24');
    const activeDateSecond = dayjs('2024-01-26');
    const until = 'month'; // Compare by month

    expect(checkRangeType(date, activeDateFirst, activeDateSecond, until)).toBe('range-start');
  });
});
