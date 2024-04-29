import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { Menu } from '../../ui/CalendarDatesMenu/ui/Menu/Menu';

describe('widgets/desktop/CalendarDatesMenu', () => {
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
  vi.mock('react-router-dom', async () => {
    const actualModule = await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom',
    );
    const mockedModule = {
      ...actualModule,
      matchPath: () => ({
        params: {
          format: 'day',
        },
      }),
    };

    return mockedModule;
  });

  vi.mock('@/entities/calendar', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/calendar')>(
      '@/entities/calendar',
    );
    const mockedModule = {
      ...actualModule,
      useGetCalendarFilters: () => mock(),
    };

    return mockedModule;
  });

  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render CalendarDatesMenu', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    expect(getByTestId('CurrentUserButton')).toBeVisible();
    expect(getByTestId('DatesButton')).toBeVisible();
    expect(getByTestId('FilterButton')).toBeVisible();
    expect(getByTestId('FormatButton')).toBeVisible();
  });

  test('open DateDrawer', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('DatesButton'));

    expect(getByText('Today')).toBeVisible();
    expect(getByText('Today')).toBeVisible();
    expect(getByText('Today')).toBeVisible();
  });

  test('open FilterModal', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('FilterButton'));

    expect(getByText('Filter')).toBeVisible();
    expect(getByTestId('FilterContentShowButton')).toBeVisible();
  });

  test('open FormatDrawer', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('FormatButton'));

    expect(getByTestId('sentinelEnd')).toBeVisible();
  });
});
