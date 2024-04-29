import { fireEvent, render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { PrimaryDropzone } from '..';

describe('ui/PrimaryDropzone', () => {
  test('render PrimaryDropzone', async () => {
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());

    setError('input1', { message: 'error', type: 'maxLength' });

    const primaryDropzoneScreen = render(
      <TestProvider>
        <PrimaryDropzone name="input1" control={control} types={['png', 'txt']} />
      </TestProvider>,
    );

    window.URL.createObjectURL = vi.fn().mockImplementation(() => 'url');

    const inputEl = primaryDropzoneScreen.getByTestId('PrimaryDropzone-input1');
    const file = new File(['file'], 'ping.txt', {
      type: 'text/plain',
    });

    Object.defineProperty(inputEl, 'files', {
      value: [file],
    });
    fireEvent.focus(inputEl);
    fireEvent.dragStart(inputEl);
    fireEvent.dragEnd(inputEl);
    fireEvent.drop(inputEl);

    expect(await primaryDropzoneScreen.findByText('ping.txt')).toBeInTheDocument();

    fireEvent.click(primaryDropzoneScreen.getByText('Delete'));

    expect(primaryDropzoneScreen.getByTestId('PrimaryDropzone')).toBeVisible();
  });

  test('render disabled PrimaryDropzone', () => {
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());

    setError('input1', { message: 'error', type: 'maxLength' });

    const primaryDropzoneScreen = render(
      <TestProvider>
        <PrimaryDropzone name="input1" control={control} types={['png', 'txt']} disabled />
      </TestProvider>,
    );

    expect(primaryDropzoneScreen.getByTestId('PrimaryDropzone')).toBeVisible();
  });
});
