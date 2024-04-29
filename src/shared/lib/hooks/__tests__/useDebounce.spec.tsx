import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useDebounce } from '@/shared/lib';

describe('hooks/useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('render useDebounce', async () => {
    const spy = vi.fn();
    const MockComponent = () => {
      const [value, setValue] = useState(1);
      useDebounce(
        () => {
          spy();
        },
        100,
        [value],
      );

      return (
        <button type="button" onClick={() => setValue(3)}>
          click
        </button>
      );
    };

    const { getByText } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    fireEvent.click(getByText('click'));

    await waitFor(
      () => {
        expect(spy).toBeCalled();
      },
      { timeout: 1000 },
    );
  });
});
