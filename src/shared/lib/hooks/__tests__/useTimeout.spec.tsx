import { fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useTimeout } from '@/shared/lib';

describe('hooks/useTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('render useTimeout', async () => {
    const spy = vi.fn();
    const MockComponent = () => {
      const { clear, reset } = useTimeout(() => {
        spy();
      }, 100);

      return (
        <>
          <button type="button" onClick={() => reset()}>
            reset
          </button>
          <button type="button" onClick={() => clear()}>
            clear
          </button>
        </>
      );
    };

    const { getByText } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    expect(spy).not.toBeCalled();

    await waitFor(
      () => {
        expect(spy).toBeCalled();
      },
      { timeout: 102 },
    );

    fireEvent.click(getByText('reset'));

    await waitFor(
      () => {
        expect(spy).toBeCalledTimes(2);
      },
      { timeout: 102 },
    );

    fireEvent.click(getByText('clear'));
  });
});
