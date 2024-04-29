import { render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { PrimaryTextarea } from '..';

describe('ui/PrimaryTextarea', () => {
  test('render PrimaryTextarea', () => {
    const inputText = 'Lorem ipsum';
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());

    setError('input1', {
      type: 'maxLength',
      message: 'error',
    });

    const primaryTextareaScreen = render(
      <TestProvider>
        <PrimaryTextarea name="input1" placeholder={inputText} control={control} />
      </TestProvider>,
    );

    expect(primaryTextareaScreen.getByTestId('PrimaryTextarea')).toBeVisible();
  });

  test('render PrimaryTextarea with props', () => {
    const inputText = 'Lorem ipsum';
    const {
      result: {
        current: { control },
      },
    } = renderHook(() => useForm());

    const primaryTextareaScreen = render(
      <TestProvider>
        <PrimaryTextarea name="name" placeholder={inputText} control={control} disabled />
        <PrimaryTextarea name="name2" control={control} disabled />
      </TestProvider>,
    );

    expect(primaryTextareaScreen.getAllByTestId('PrimaryTextarea')).toBeDefined();
  });
});
