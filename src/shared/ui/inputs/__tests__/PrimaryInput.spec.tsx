import { fireEvent, render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { IconSliderSvg } from '@/shared/assets';

import { PrimaryInput } from '..';

describe('ui/PrimaryInput', () => {
  test('render PrimaryInput', () => {
    const inputText = 'Lorem ipsum';
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());

    setError('input1', { message: 'error' });

    const primaryInputScreen = render(
      <TestProvider>
        <PrimaryInput name="input1" placeholder={inputText} control={control} type="password" />
      </TestProvider>,
    );

    fireEvent.click(primaryInputScreen.getByTestId('PrimaryInput-toggle'));

    expect(primaryInputScreen.getByTestId('PrimaryInput')).toBeVisible();
  });

  test('render PrimaryInput with props', () => {
    const inputText = 'Lorem ipsum';
    const {
      result: {
        current: { control },
      },
    } = renderHook(() => useForm());

    const primaryInputScreen = render(
      <TestProvider>
        <PrimaryInput
          name="name"
          placeholder={inputText}
          control={control}
          disabled
          type="password"
          IconComponent={IconSliderSvg}
        />
        <PrimaryInput name="name2" control={control} disabled type="text" />
      </TestProvider>,
    );

    expect(primaryInputScreen.getAllByTestId('PrimaryInput')).toBeDefined();
  });
});
