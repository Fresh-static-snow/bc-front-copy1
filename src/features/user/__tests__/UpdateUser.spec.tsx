import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { UpdateUser } from '../ui/UpdateUser/UpdateUser';

vi.mock('@/shared/lib', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
  const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
    ...actualModule,
    useCheckAccess: () => () => true,
  };

  return mockedModule;
});

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
  const mockedModule: DeepPartial<typeof import('@/entities/user')> = {
    ...actualModule,
    useGetUser: () => ({
      data: {
        id: 1,
        roles: [{ id: 1, title: '', description: '' }],
        email: 'test@mail.com',
        display_name: 'display_name',
        user_disciplines: [{ id: 1, title: 'dota' }],
        company: { id: 1, title: 'company', cover: { url: 'url' } },
        avatar: {},
        confirmed: true,
        deactivated: false,
        google_calendar: {
          link: '',
          required: false,
        },
      },
      isSuccess: true,
      isFetching: false,
    }),
    useUpdateUser: () => ({
      isLoading: false,
      mutateAsync: vi.fn(),
      data: [{ label: 'Dolor', value: 'Dolor' }],
    }),
  };

  return mockedModule;
});

vi.mock('@/entities/role', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/role')>('@/entities/role');
  const mockedModule: DeepPartial<typeof import('@/entities/role')> = {
    ...actualModule,
    useGetRoleOptions: () => ({
      data: [{ label: 'Dolor', value: 'Dolor' }],
    }),
  };

  return mockedModule;
});

vi.mock('@/entities/user-company', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/user-company')>(
    '@/entities/user-company',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/user-company')> = {
    ...actualModule,
    useGetUserCompanyOptions: () => ({
      data: [{ label: 'test1', value: 'test1' }],
    }),
  };

  return mockedModule;
});

vi.mock('@/entities/user-discipline', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/user-discipline')>(
    '@/entities/user-discipline',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/user-discipline')> = {
    ...actualModule,
    useGetUserDisciplineOptions: () => ({
      data: [{ label: 'Lorem', value: 'Lorem' }],
    }),
  };

  return mockedModule;
});

describe('features/user/UpdateUser', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateUser', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateUser userId="1" deleteBackPath={undefined} sendBackPath={undefined} />
      </TestProvider>,
    );
    fireEvent.click(getByTestId('PrimaryButton-edit'));
    fireEvent.input(getByTestId('PrimaryInput-username'), { target: { value: 'username' } });
    expect(getByTestId('PrimaryInput-username')).toHaveValue('username');

    expect(getByText('Update')).toBeVisible();
    fireEvent.click(getByText('Update'));
  });
});
