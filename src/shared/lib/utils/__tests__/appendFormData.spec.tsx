import { describe, expect, test } from 'vitest';

import { appendFormData } from '@/shared/lib';

describe('utils/appendFormData', () => {
  test('appends nothing for empty data', () => {
    const formData = new FormData();
    appendFormData(formData, []);
    expect(formData.entries.length).toBe(0);
  });

  test('appends simple string value', () => {
    const formData = new FormData();
    appendFormData(formData, [{ key: 'name', value: 'John' }]);
    expect(formData.get('name')).toBe('John');
  });

  test('appends file object', () => {
    const file = new File(['test content'], 'test.txt');
    const formData = new FormData();
    appendFormData(formData, [{ key: 'file', value: file }]);
    expect(formData.has('file')).toBe(true);
  });

  test('appends string list with "list" option', () => {
    const formData = new FormData();
    appendFormData(formData, [
      { key: 'colors', value: ['red', 'green', 'blue'], options: { type: 'list' } },
    ]);
    expect(formData.getAll('colors')).toEqual(['red', 'green', 'blue']);
  });

  test('ignores empty string with "canBeEmpty" option', () => {
    const formData = new FormData();
    appendFormData(formData, [{ key: 'description', options: { canBeEmpty: true } }]);
    expect(formData.get('description')).toBe('');
  });
});
