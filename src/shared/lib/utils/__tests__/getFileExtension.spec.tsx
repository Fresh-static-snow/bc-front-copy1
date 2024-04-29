import { describe, expect, test } from 'vitest';

import { getFileExtension } from '@/shared/lib';

describe('utils/getFileExtension', () => {
  test('compile getFileExtension', () => {
    expect(getFileExtension('test.png')).toBe('png');
  });
});
