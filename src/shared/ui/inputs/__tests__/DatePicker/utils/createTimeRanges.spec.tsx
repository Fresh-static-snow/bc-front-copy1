import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { describe, expect, it } from 'vitest';

import { createTimeRanges } from '../../../DatePicker/lib';

dayjs.extend(isSameOrBefore);

describe('ui/utils/createTimeRanges', () => {
  it('creates correct time ranges for a simple range', () => {
    const start = '09:00';
    const end = '10:00';

    const expectedRanges = ['09:00', '09:15', '09:30', '09:45', '10:00'];
    expect(createTimeRanges(start, end)).toEqual(expectedRanges);
  });

  it('handles ranges spanning multiple hours', () => {
    const start = '22:45';
    const end = '01:30';
    expect(createTimeRanges(start, end)).toEqual([]);
  });

  it('handles ranges with equal start and end times', () => {
    const start = '12:00';
    const end = '12:00';

    expect(createTimeRanges(start, end)).toEqual(['12:00']);
  });
});
