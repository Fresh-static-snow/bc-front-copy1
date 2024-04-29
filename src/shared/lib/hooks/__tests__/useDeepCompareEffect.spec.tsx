import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useDeepCompareEffect } from '@/shared/lib';

describe('hooks/useDeepCompareEffect', () => {
  test('render useDeepCompareEffect', () => {
    const spy = vi.fn();
    const MockComponent = () => {
      const [value, setValue] = useState(1);
      useDeepCompareEffect(() => {
        spy();
      }, [value]);

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

    expect(spy).toBeCalled();
  });
});
