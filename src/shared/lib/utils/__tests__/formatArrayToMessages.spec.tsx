import { describe, expect, test } from 'vitest';

import { formatArrayToMessages } from '@/shared/lib'; // Adjust the path

describe('formatArrayToMessages', () => {
  test('returns empty string with empty array', () => {
    expect(formatArrayToMessages([])).toBe('');
  });

  test('returns empty string for undefined data', () => {
    expect(formatArrayToMessages(undefined)).toBe('');
  });
});
