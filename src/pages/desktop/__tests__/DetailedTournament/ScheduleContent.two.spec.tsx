import { UseQueryResult } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { TournamentSchedule } from '@/shared/types/entities.types';

import ScheduleContent from '../../ui/DetailedTournament/ui/ScheduleContent/ScheduleContent';

describe('pages/desktop/DetailedTournament/ScheduleContent', () => {
  vi.mock('@/shared/api', async () => {
    const actualModule = await vi.importActual<typeof import('@/shared/api')>('@/shared/api');
    const mockedModule: DeepPartial<typeof import('@/shared/api')> = {
      ...actualModule,
      axiosInstance: {
        delete: vi.fn(),
        get: vi.fn(),
        post: vi.fn(),
        patch: vi.fn(),
        put: vi.fn(),
        interceptors: {
          response: {
            use: vi.fn(),
          },
        },
      },
    };

    return mockedModule;
  });

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

  it('render Schedule with matches', () => {
    vi.mock('@/shared/lib', async () => {
      const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
      return {
        ...actualModule,
        useHasAccess: () => true,
      };
    });

    vi.mock('@/entities/tournament', async () => {
      const actualModule = await vi.importActual<typeof import('@/entities/tournament')>(
        '@/entities/tournament',
      );
      return {
        ...actualModule,
        useGetTournamentSchedule: () =>
          ({
            data: {
              ui_template: {},
              dates: [
                {
                  start_date: '',
                  end_date: '',
                  matches: [
                    {
                      id: 1,
                      start_time: 'start_time',
                      start_date: 'start_date',
                      end_time: 'string',
                      team_one: 'string',
                      team_two: 'string',
                      format: 'string',
                      visible: true,
                      match_casts: [],
                    },
                  ],
                },
              ],
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
          } as unknown as UseQueryResult<TournamentSchedule, unknown>),
      };
    });

    const { getByText, getByTestId } = render(
      <TestProvider>
        <ScheduleContent />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('match-root-button'));

    expect(getByText('start_time')).toBeVisible();
  });
});
