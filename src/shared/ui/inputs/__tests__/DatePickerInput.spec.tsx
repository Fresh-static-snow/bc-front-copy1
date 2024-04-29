import { fireEvent, render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { DatePickerInput } from '..';

describe('elements/DatePickerInput', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  it('render DatePickerInput with day type', () => {
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());
    setError('input1', {
      type: 'maxLength',
      message: 'error',
    });

    const { getByTestId, getByText, rerender } = render(
      <TestProvider>
        <DatePickerInput control={control} name="input1" type="day" />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('DatePickerInput-input'));

    rerender(
      <TestProvider>
        <DatePickerInput control={control} name="input1" type="day" />
      </TestProvider>,
    );

    fireEvent.click(getByText('24'));

    expect(getByTestId('DatePickerInput')).toBeVisible();
  });

  it('render DatePickerInput with range type', () => {
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());
    setError('input1', {
      type: 'maxLength',
      message: 'error',
    });

    const { rerender, getByTestId, getByText } = render(
      <TestProvider>
        <DatePickerInput control={control} name="input1" type="range" />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('DatePickerInput-input'));

    rerender(
      <TestProvider>
        <DatePickerInput control={control} name="input1" type="range" />
      </TestProvider>,
    );

    fireEvent.click(getByText('24'));

    expect(getByTestId('DatePickerInput')).toBeVisible();
  });
});
