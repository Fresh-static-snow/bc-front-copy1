import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { QuarterYearDisciplineItem } from '@/entities/calendar/api/calendar.service.types';
import { CalendarOutletContext } from '@/pages/desktop/ui/Calendar/types';

import QuarterContent from '../../ui/Calendar/ui/QuarterContent/QuarterContent';

vi.mock('@/entities/calendar', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/calendar')>(
    '@/entities/calendar',
  );

  const mockedModule = {
    ...actualModule,
    useGetCalendarQuarter: () =>
      mock<UseQueryResult<QuarterYearDisciplineItem[]>>(
        {
          data: [
            {
              corporates: [],
              discipline: {
                id: 1,
                cover: { url: '' },
                keyword: 'Lorem',
                title: 'Ipsum',
              },
              tournaments: [],
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

describe('pages/mobile/Calendar/QuarterContent', () => {
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

  test('render QuarterContent', () => {
    const { getByAltText } = render(
      <TestProvider>
        <QuarterContent />
      </TestProvider>,
    );

    expect(getByAltText('Lorem')).toBeVisible();
  });
});
