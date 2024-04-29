import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { WeekMonthDisciplineItem } from '@/entities/calendar/api/calendar.service.types';
import { CalendarOutletContext } from '@/pages/desktop/ui/Calendar/types';

import MonthContent from '../../ui/Calendar/ui/MonthContent/MonthContent';

vi.mock('@/entities/calendar', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/calendar')>(
    '@/entities/calendar',
  );

  const mockedModule = {
    ...actualModule,
    useGetCalendarMonth: () =>
      mock<UseQueryResult<WeekMonthDisciplineItem[]>>(
        {
          data: [
            {
              type: 'tournament',
              date: dayjs().toString(),
              disciplines: [
                {
                  tournaments: [
                    {
                      title: 'Lorem',
                      start_date: 'Dolor',
                      matches: [{ id: 1, team_one: 'Team1', team_two: 'Team2', visible: true }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { deep: true },
      ),
  };

  return mockedModule;
});

vi.mock('react-router-dom', async () => {
  const actualModule = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  const mockedModule = {
    ...actualModule,
    useOutletContext: () =>
      mock<CalendarOutletContext>({
        onClickCorporate: vi.fn(),
        onClickDiscipline: vi.fn(),
        onClickTournament: vi.fn(),
      }),
  };

  return mockedModule;
});

describe('pages/mobile/Calendar/MonthContent', () => {
  beforeEach(() => {
    const IntersectionObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('IntersectionObserver', IntersectionObserver);

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

  test('render MonthContent', () => {
    const { getByText } = render(
      <TestProvider>
        <MonthContent />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
    expect(getByText('Team1')).toBeVisible();
    expect(getByText('Team2')).toBeVisible();
  });
});
