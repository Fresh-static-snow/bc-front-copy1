import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { describe, expect, it } from 'vitest';

import { generateDays } from '../../../DatePicker/lib';

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

describe('ui/utils/generateDays', () => {
  it('compile generateDays', () => {
    expect(generateDays(dayjs(), dayjs(), dayjs())).toHaveLength(6);
  });
});
