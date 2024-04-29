import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';

import { generateDecades } from '../../../DatePicker/lib';

describe('ui/utils/generateDecades', () => {
  it('compile generateDecades', () => {
    const date = generateDecades(1, dayjs());

    expect(date).toHaveLength(16);
  });
});
