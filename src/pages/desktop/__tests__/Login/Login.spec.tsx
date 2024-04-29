import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import PageLayout from '../../ui/Login/ui/PageLayout/PageLayout';

describe('pages/desktop/Login', () => {
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

  it('render Login Page', () => {
    const labelText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<div>{labelText}</div>} />
        </Route>
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });
});
