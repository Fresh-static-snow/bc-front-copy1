import { Field } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { getRealFormFieldIndex } from '@/shared/lib';

describe('utils/getRealFormFieldIndex', () => {
  test('returns -1 when the current field is not found', () => {
    const fields: Field[] = [];
    const currentField = { id: 'not-found' };
    const realIndex = getRealFormFieldIndex(fields, currentField);
    expect(realIndex).toBe(-1);
  });

  test('returns the correct index when the current field is found', () => {
    const fields = [{ id: 'field1' }, { id: 'field2' }, { id: 'field3' }];
    const currentField = { id: 'field2' };
    const realIndex = getRealFormFieldIndex(fields, currentField);
    expect(realIndex).toBe(1);
  });

  test('handles fields with duplicate IDs', () => {
    const fields = [{ id: 'field1' }, { id: 'field2' }, { id: 'field1' }];
    const currentField = { id: 'field1' };
    const realIndex = getRealFormFieldIndex(fields, currentField);
    expect(realIndex).toBe(0);
  });

  test('handles empty fields array', () => {
    const fields: Field[] = [];
    const currentField = { id: 'any-id' };
    const realIndex = getRealFormFieldIndex(fields, currentField);
    expect(realIndex).toBe(-1);
  });
});
