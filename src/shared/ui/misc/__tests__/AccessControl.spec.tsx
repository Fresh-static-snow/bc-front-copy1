import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useHasAccess } from '@/shared/lib';

import { AccessControl } from '..';

describe('ui/AccessControl', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render AccessControl with no access', () => {
    const hiddenText = 'Lorem ipsum';
    const { queryByText } = render(
      <TestProvider>
        <AccessControl>{hiddenText}</AccessControl>
      </TestProvider>,
    );

    expect(queryByText(hiddenText)).toBeNull();
  });

  it('render AccessControl with access', () => {
    vi.mock('@/shared/lib');
    vi.mocked(useHasAccess).mockImplementation(() => true);

    const hiddenText = 'Lorem ipsum';
    const { queryByText } = render(
      <TestProvider>
        <AccessControl>{hiddenText}</AccessControl>
      </TestProvider>,
    );

    expect(queryByText(hiddenText)).toBeVisible();
  });
});
