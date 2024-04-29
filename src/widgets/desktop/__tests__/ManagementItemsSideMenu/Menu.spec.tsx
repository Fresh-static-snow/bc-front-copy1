import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { useHasAccess } from '@/shared/lib';
import { ManagementItems } from '@/shared/types/entities.types';

import { Menu } from '../../ui/ManagementItemsSideMenu/ui/Menu/Menu';

describe('widgets/desktop/ManagementMenu', () => {
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
      useGetManagementItems: () => ({
        isLoading: true,
        data: mock<ManagementItems>(
          { Team: 54, 'Deleted items': { count: 100, items: { Discipline: 20 } } },
          { deep: true },
        ),
      }),
    };

    return mockedModule;
  });
  vi.mock('@/shared/lib');
  vi.mocked(useHasAccess).mockReturnValue(true);

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render ManagementMenu', () => {
    const { getByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );
    expect(getByText('Deleted items')).toBeVisible();
    expect(getByText('Team')).toBeVisible();
    expect(getByText('54')).toBeVisible();
    expect(getByText('100')).toBeVisible();
  });
});
