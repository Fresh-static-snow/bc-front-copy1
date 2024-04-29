import { render } from '@testing-library/react';
import { ElementRef, useRef } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useOnScreen } from '@/shared/lib';

describe('hooks/useOnScreen', () => {
  const observe = vi.fn();

  beforeEach(() => {
    const IntersectionObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe,
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('IntersectionObserver', IntersectionObserver);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render useOnScreen', () => {
    const MockComponent = () => {
      const contentRef = useRef<ElementRef<'div'>>(null);
      useOnScreen(contentRef);

      return <div ref={contentRef} style={{ height: 2, width: 2 }} />;
    };

    render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    expect(observe).toBeCalledTimes(1);
  });
});
