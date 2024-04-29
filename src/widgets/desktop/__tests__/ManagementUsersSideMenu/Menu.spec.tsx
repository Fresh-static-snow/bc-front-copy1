import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useHasAccess } from '@/shared/lib';

import { Menu } from '../../ui/ManagementUsersSideMenu/ui/Menu/Menu';

describe('widgets/desktop/ManagementUsersSideMenu', () => {
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

  vi.mock('@/entities/user', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/user')>('@/entities/user');
    return {
      ...actualModule,
      useGetPreDeletedUsers: () => ({
        data: [],
        isLoading: true,
      }),
    };
  });

  vi.mock('@/entities/management', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/management')>(
      '@/entities/management',
    );
    return {
      ...actualModule,
      useGetDashboardCompanies: () => ({
        isLoading: false,
      }),
      useGetDashboardUsers: () => ({
        isLoading: false,
      }),
    };
  });

  vi.mock('@/entities/role', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/role')>('@/entities/role');
    return {
      ...actualModule,
      useGetRoleOptions: () => ({
        data: [],
        isLoading: false,
      }),
    };
  });
  vi.mock('@/shared/lib');
  vi.mocked(useHasAccess).mockReturnValue(true);

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render ManagementUsersSideMenu', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    expect(getByTestId('PrimaryInput-term')).toBeInTheDocument();
    fireEvent.input(getByTestId('PrimaryInput-term'), { target: { value: 'Lorem' } });
  });
});
