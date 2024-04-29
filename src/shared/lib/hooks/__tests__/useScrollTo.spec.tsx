import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useScrollTo } from '@/shared/lib';

describe('hooks/useOnScreen', () => {
  const scrollIntoViewMock = vi.fn();

  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });

  test('render useScrollTo', () => {
    const spy = vi.fn();
    const MockComponent = () => {
      const [scrollToRef, setShouldScrollTo] = useScrollTo<HTMLButtonElement>();

      return (
        <button
          type="button"
          ref={scrollToRef}
          onClick={() => {
            setShouldScrollTo(true);
            spy();
          }}
        >
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
    expect(scrollIntoViewMock).toBeCalledTimes(1);
  });
});
