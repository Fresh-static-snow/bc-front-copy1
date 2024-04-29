import { describe, expect, test } from 'vitest';

import { getCascadingActiveOptions } from '@/shared/lib';
import { CascaderPrimaryValue } from '@/shared/types/values.types';

describe('getCascadingActiveOptions', () => {
  test('returns empty array with no options', () => {
    expect(getCascadingActiveOptions([], [])).toEqual([]);
  });

  test('returns empty array with no options', () => {
    const options: CascaderPrimaryValue[] = [
      {
        value: 'parent1',
        label: 'Parent 1',
        children: [{ label: 'parent1', value: 'parent1', parents: ['parent1'] }],
      },
      { value: 'parent2', label: 'Parent 2' },
    ];
    expect(getCascadingActiveOptions(options, [])).toEqual([]);
  });
});
