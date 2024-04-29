import { describe, expect, test } from 'vitest';

import { parseQueryParams } from '@/shared/lib';

describe('utils/parseQueryParams', () => {
  test('parses empty query string', () => {
    expect(parseQueryParams('')).toEqual({});
  });

  test('parses single key-value pair', () => {
    const search = 'key=value';
    expect(parseQueryParams(search)).toEqual({ key: 'value' });
  });

  test('parses multiple key-value pairs', () => {
    const search = 'key1=value1&key2=value2';
    expect(parseQueryParams(search)).toEqual({ key1: 'value1', key2: 'value2' });
  });

  test('handles non-existent keys', () => {
    const search = 'existingKey=value';
    expect(parseQueryParams(search)).toEqual({ existingKey: 'value' });
  });

  test('ignores malformed search string', () => {
    const search = 'missingEqualSign';
    expect(parseQueryParams(search)).toEqual({ missingEqualSign: '' });
  });
});
