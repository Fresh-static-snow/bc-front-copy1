import { describe, expect, test } from 'vitest';

import { generateLinkFromArray } from '@/shared/lib';

describe('utils/generateLinkFromArray', () => {
  test('compile generateLinkFromArray', () => {
    expect(generateLinkFromArray(['test1', 'test2'])).toBe('test1/test2');
  });
});
