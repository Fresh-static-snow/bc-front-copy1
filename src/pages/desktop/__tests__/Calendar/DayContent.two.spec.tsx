import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';
import { DeepPartial } from 'react-hook-form';
import { Route } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock, mockDeep } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import {
  DayDisciplineItem,
  GetCalendarFiltersResponse,
} from '@/entities/calendar/api/calendar.service.types';
import { UseCustomSearchParams } from '@/shared/lib/hooks/useCustomSearchParams/useCustomSearchParams.types';

import DayContent from '../../ui/Calendar/ui/DayContent/DayContent';
import PageLayout from '../../ui/Calendar/ui/PageLayout/PageLayout';

describe('pages/desktop/Calendar/DayContent', () => {
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
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render DayContent Page', () => {
    vi.mock('@/shared/lib', async () => {
      const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
      const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
        ...actualModule,
        useCustomSearchParams: () =>
          mock<UseCustomSearchParams>({ params: { start_at: dayjs() as unknown as string } }),
      };

      return mockedModule;
    });

    vi.mock('@/entities/calendar', async () => {
      const actualModule = await vi.importActual<typeof import('@/entities/calendar')>(
        '@/entities/calendar',
      );
      const mockedModule = {
        ...actualModule,
        useGetCalendarDay: () =>
          mock<UseQueryResult<DayDisciplineItem[]>>({
            data: [
              {
                corporates: [
                  mock<DayDisciplineItem['corporates'][number]>({
                    participants: [mockDeep()],
                    main_participants: [mockDeep()],
                  }),
                ],
                discipline: mockDeep<DayDisciplineItem['discipline']>(),
                tournaments: [
                  mock<DayDisciplineItem['tournaments'][number]>(
                    {
                      main_participants: [],
                      analytics: [],
                      commentators: [],
                      media_representatives: [],
                      descriptions: [],
                    },
                    { deep: true },
                  ),
                ],
              },
            ],
          }),
        useGetCalendarFilters: () => mock<UseQueryResult<GetCalendarFiltersResponse, unknown>>(),
      };

      return mockedModule;
    });

    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<DayContent />} />
        </Route>
      </TestProvider>,
    );

    expect(getByText('Tournament')).toBeVisible();
    expect(getByText('Match')).toBeVisible();
    expect(getByText('Staff')).toBeVisible();
    expect(getByText('Channel')).toBeVisible();
  });
});
