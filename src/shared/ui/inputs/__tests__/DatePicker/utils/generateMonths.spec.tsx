import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';

import { generateMonths } from '../../../DatePicker/lib';

describe('ui/utils/generateMonths', () => {
  it('compile generateMonths', () => {
    const activeYear = dayjs('2024-01-01');
    const activeDateFirst = dayjs('2024-03-15');

    const monthRows = generateMonths(activeYear, activeDateFirst);

    expect(monthRows).toHaveLength(4);
  });
});
