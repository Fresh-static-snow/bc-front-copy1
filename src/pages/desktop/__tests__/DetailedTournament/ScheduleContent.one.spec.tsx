import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

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

  it('render Schedule with no matches', () => {
    vi.mock('@/entities/tournament', async () => {
      const actualModule = await vi.importActual<typeof import('@/entities/tournament')>(
        '@/entities/tournament',
      );
      return {
        ...actualModule,
        tournamentsServiceHooks: {
          useGetTournamentSchedule: () => ({
            data: { dates: [] },
            error: undefined,
            isError: false,
            isLoading: false,
            isLoadingError: false,
            isRefetchError: false,
            isSuccess: false,
            refetch: vi.fn(),
            remove: vi.fn(),
            fetchStatus: 'fetching',
          }),
        },
      };
    });

    const { getByTestId } = render(
      <TestProvider>
        <ScheduleContent />
      </TestProvider>,
    );
    expect(getByTestId('Scrollbar')).toBeVisible();
  });
});
