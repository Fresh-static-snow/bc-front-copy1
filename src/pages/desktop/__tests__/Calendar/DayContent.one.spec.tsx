import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { Route } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

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
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render DayContent with no items', () => {
    vi.mock('@/shared/lib', async () => {
      const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
      return {
        ...actualModule,
        calendarServiceHooks: {
          useGetCalendarFilters: () => ({
            data: {},
          }),
          useGetCalendarDay: () => ({
            data: [],
          }),
        },
      };
    });
    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<DayContent />} />
        </Route>
      </TestProvider>,
    );

    expect(getByText('Main & Media')).toBeVisible();
  });
});
