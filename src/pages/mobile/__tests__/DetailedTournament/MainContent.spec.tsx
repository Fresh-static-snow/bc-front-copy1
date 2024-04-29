import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useGetTournament } from '@/entities/tournament';
import { TournamentById } from '@/shared/types/entities.types';

import MainContent from '../../ui/DetailedTournament/ui/MainContent/MainContent';

describe('pages/desktop/DetailedTournamentMobile/MainContent', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render MainContent', () => {
    vi.mock('@/entities/tournament');
    vi.mocked(useGetTournament).mockReturnValue({
      data: {
        id: 1,
        entity_type: 'string',
        comments_count: 1,
        end_date: '',
        cover: '',
        descriptions: [],
        media: [],
        matches: [],
        discipline: { cover: { url: '' } },
        discipline_keyword: 'string',
        start_date: 'string',
        title: 'string',
        visible: true,
        sponsors: [],
        owner: {},
        region: {},
        type: {},
        ui_template: {},
      },
      error: undefined,
      isError: false,
      isLoading: false,
      isLoadingError: false,
      isRefetchError: false,
      isSuccess: false,
      status: 'error',
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: undefined,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isInitialLoading: false,
      isPaused: false,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetching: false,
      isStale: false,
      refetch: vi.fn(),
      remove: vi.fn(),
      fetchStatus: 'fetching',
    } as unknown as UseQueryResult<TournamentById, unknown>);

    const { getByText } = render(
      <TestProvider>
        <MainContent />
      </TestProvider>,
    );

    expect(getByText('Description')).toBeVisible();
    expect(getByText('Participants (0)')).toBeVisible();
  });
});
