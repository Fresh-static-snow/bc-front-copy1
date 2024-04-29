import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import UsersSubContentDashboard from '../../ui/Management/ui/UsersSubContentDashboard/UsersSubContentDashboard';

describe('pages/desktop/Management/UsersSubContentDashboard', () => {
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

  vi.mock('@/entities/management', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/management')>(
      '@/entities/management',
    );
    const mockedModule: DeepPartial<typeof import('@/entities/management')> = {
      ...actualModule,
      useGetDashboardCounts: () => ({
        data: [],
        isLoading: false,
      }),
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

  test('render UsersSubContentDashboard', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UsersSubContentDashboard />
      </TestProvider>,
    );

    expect(getByTestId('Scrollbar')).toBeVisible();
    expect(getByText('Mark all as read')).toBeVisible();
  });
});
