import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useGetSegment } from '@/entities/event-segment';
import {
  AnalyticStudio,
  Channel,
  DescriptionObject,
  Format,
  GameDiscipline,
  GuestObject,
  ImageSignature,
  LanguageObject,
  MatchCast,
  MediaObject,
  SegmentById,
  Setup,
  Stream,
  Studio,
  TournamentShort,
  UserInCalendarEntity,
} from '@/shared/types/entities.types';

import MainContent from '../../ui/DetailedSegment/ui/MainContent/MainContent';

describe('pages/desktop/DetailedSegment/MainContent', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render MainContent', () => {
    vi.mock('@/entities/event-segment');
    vi.mocked(useGetSegment).mockReturnValue({
      data: {
        id: 1,
        start_time: '13:00',
        start_date: '2024-07-24',
        end_time: '15:00',
        comments_count: 5,
        format: {},
        title: 'string',
        cover: '',
        logo: '',
        guests: [],
        descriptions: [],
        languages: [],
        commentators: [],
        backup_commentators: [],
        analytics: [],
        host_analytics: [],
        staff_members: [],
        visible: true,
        type: 'Segment',
        game_discipline: {},
        tournament: {},
        analytic_studios: [],
        studios: [],
        setups: [],
        streams: [],
        channels: [],
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
    } as unknown as UseQueryResult<SegmentById, unknown>);

    const { getByText } = render(
      <TestProvider>
        <MainContent />
      </TestProvider>,
    );

    expect(getByText('Description')).toBeVisible();
  });
});
