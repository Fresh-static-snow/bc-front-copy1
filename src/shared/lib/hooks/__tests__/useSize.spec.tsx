import { render } from '@testing-library/react';
import { ElementRef, useRef } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useSize } from '@/shared/lib';

describe('hooks/useSize', () => {
  const observe = vi.fn();

  beforeEach(() => {
    const ResizeObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe,
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserver);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render useSize', () => {
    const MockComponent = () => {
      const contentRef = useRef<ElementRef<'div'>>(null);
      useSize(contentRef);

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
