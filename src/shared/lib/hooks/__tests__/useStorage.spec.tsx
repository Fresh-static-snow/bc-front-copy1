import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useLocalStorage, useSessionStorage } from '@/shared/lib';

describe('hooks/useStorage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('render useStorage', () => {
    const MockComponent = () => {
      const local = useLocalStorage('local', 1);
      const session = useSessionStorage('session', 1);

      return (
        <>
          <div>local value {local[0]}</div>
          <div>session value {local[0]}</div>
          <button
            type="button"
            onClick={() => {
              local[2]();
              session[2]();
            }}
          >
            remove
          </button>
          <button
            type="button"
            onClick={() => {
              local[1](2);
              session[1](2);
            }}
          >
            setValue
          </button>
        </>
      );
    };

    const { getByText } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    expect(getByText('local value 1')).toBeVisible();
    expect(getByText('session value 1')).toBeVisible();

    act(() => fireEvent.click(getByText('setValue')));

    expect(getByText('local value 2')).toBeVisible();
    expect(getByText('session value 2')).toBeVisible();

    act(() => fireEvent.click(getByText('remove')));
  });
});
