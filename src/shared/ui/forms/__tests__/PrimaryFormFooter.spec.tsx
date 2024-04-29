import { render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { PrimaryFormFooter } from '..';

describe('ui/PrimaryFormFooter', () => {
  test('render PrimaryFormFooter', () => {
    const {
      result: {
        current: { control },
      },
    } = renderHook(() => useForm());

    const { getByText } = render(
      <TestProvider>
        <PrimaryFormFooter
          control={control}
          submitChecked
          withDelete
          checkBoxName="checkbox"
          switchName="switch"
        />
      </TestProvider>,
    );

    expect(getByText('Visible item')).toBeInTheDocument();
    expect(getByText('Create another one')).toBeInTheDocument();
    expect(getByText('Delete')).toBeVisible();
  });
});
