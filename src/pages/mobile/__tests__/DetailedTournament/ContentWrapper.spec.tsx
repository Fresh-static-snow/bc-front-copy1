import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ContentWrapper } from '../../ui/DetailedTournament/ui/ContentWrapper/ContentWrapper';

describe('pages/desktop/DetailedTournamentMobile/ContentWrapper', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render ContentWrapper', () => {
    const { getByText } = render(
      <TestProvider>
        <ContentWrapper>Lorem</ContentWrapper>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
