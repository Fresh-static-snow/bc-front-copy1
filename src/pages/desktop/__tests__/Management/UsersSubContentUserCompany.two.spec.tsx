import { UseQueryResult } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { UserCompanyForm } from '@/shared/types/entities.types';

import UsersSubContentUserCompany from '../../ui/Management/ui/UsersSubContentUserCompany/UsersSubContentUserCompany';

describe('pages/desktop/Management/UsersSubContentUserCompany', () => {
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

  vi.mock('@/entities/user-company', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/user-company')>(
      '@/entities/user-company',
    );

    const mockedModule: DeepPartial<typeof import('@/entities/user-company')> = {
      ...actualModule,
      useGetUserCompanyForm: () =>
        mock<UseQueryResult<UserCompanyForm>>(
          {
            data: { users: [{ id: 1 }] },
          },
          { deep: true },
        ),
    };

    return mockedModule;
  });

  vi.mock('@/entities/user-company', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/user-company')>(
      '@/entities/user-company',
    );

    const mockedModule: DeepPartial<typeof import('@/entities/user-company')> = {
      ...actualModule,
      useGetUserCompanyForm: () =>
        mock<UseQueryResult<UserCompanyForm>>(
          {
            data: { users: [{ id: 1 }] },
          },
          { deep: true },
        ),
    };

    return mockedModule;
  });

  vi.mock('react-router-dom', async () => {
    const actualModule = await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom',
    );

    const mockedModule = {
      ...actualModule,
      useParams: () => ({
        userId: '1',
        companyid: '1',
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

  test('render UsersSubContentUserCompany', () => {
    const { queryByTestId, getByTestId } = render(
      <TestProvider>
        <UsersSubContentUserCompany />
      </TestProvider>,
    );
    expect(getByTestId('Scrollbar')).toBeVisible();
    fireEvent.click(getByTestId('Back'));

    expect(queryByTestId('Scrollbar')).toBeNull();
  });
});
