import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { InfinityScrollbar } from '..';

describe('ui/InfinityScrollbar', () => {
  beforeEach(() => {
    const ResizeObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserver);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render InfinityScrollbar', () => {
    const scrollbarText = 'Lorem ipsum';
    const fetchNextPageMock = vi.fn();

    const { getByText } = render(
      <TestProvider>
        <div style={{ height: 600 }}>
          <InfinityScrollbar fetchNextPage={fetchNextPageMock} canFetchNextPage>
            <div style={{ height: 601 }}>{scrollbarText}</div>
            <div style={{ height: 200 }} data-testid="custom-scrollbar-content" />
          </InfinityScrollbar>
        </div>
      </TestProvider>,
    );

    expect(getByText(scrollbarText)).toBeVisible();
  });

  it('render not active InfinityScrollbar', () => {
    const scrollbarText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <InfinityScrollbar fetchNextPage={vi.fn()} active={false}>
          {scrollbarText}
        </InfinityScrollbar>
      </TestProvider>,
    );

    expect(getByText(scrollbarText)).toBeVisible();
  });
});
