import { render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { mobileMedia } from '@/shared/const';

import { TiptapEditor } from '..';

describe('ui/TiptapEditor', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  test('render TiptapEditor', () => {
    const placeholder = 'Lorem ipsum';
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());

    setError('input1', {
      type: 'maxLength',
      message: 'error',
    });

    const { getByTestId, getByText, getAllByText } = render(
      <TestProvider>
        <TiptapEditor name="input1" placeholder={placeholder} control={control} />
      </TestProvider>,
    );

    expect(getByTestId('TiptapEditor')).toBeVisible();
    expect(getByText('error')).toBeVisible();
  });
});
