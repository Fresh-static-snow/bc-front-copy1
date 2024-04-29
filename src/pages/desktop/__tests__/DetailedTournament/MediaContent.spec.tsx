import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useGetTournamentMedia } from '@/entities/tournament';
import { GetTournamentMediasResponse } from '@/entities/tournament/api/tournament.service.types';

import MediaContent from '../../ui/DetailedTournament/ui/MediaContent/MediaContent';

describe('pages/desktop/DetailedTournament/MediaContent', () => {
  vi.mock('@/entities/tournament');

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render Media', () => {
    vi.mocked(useGetTournamentMedia).mockReturnValue({
      data: [
        {
          id: 1,
          description: '',
          title: '',
          updated_at: '',
        },
      ],
    } as UseQueryResult<GetTournamentMediasResponse>);

    const { getByText } = render(
      <TestProvider>
        <MediaContent />
      </TestProvider>,
    );

    expect(getByText('Last update')).toBeVisible();
  });

  it('render Media with no items', () => {
    vi.mocked(useGetTournamentMedia).mockReturnValue({
      data: [],
    } as unknown as UseQueryResult<GetTournamentMediasResponse, unknown>);

    const { getByText } = render(
      <TestProvider>
        <MediaContent />
      </TestProvider>,
    );

    expect(getByText('There are no media yet.')).toBeVisible();
  });
});
