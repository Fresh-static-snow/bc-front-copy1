import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useOnLoadingComplete } from '@/shared/lib';

describe('hooks/useOnLoadingComplete', () => {
  test('render useOnLoadingComplete', () => {
    const spy = vi.fn();
    const MockComponent = () => {
      const [load, setLoad] = useState(true);

      useOnLoadingComplete(load, () => {
        spy();
      });

      return (
        <button type="button" onClick={() => setLoad((o) => !o)}>
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

    expect(spy).toBeCalledTimes(1);
  });
});
