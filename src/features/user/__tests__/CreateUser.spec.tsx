import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CreateUser } from '../ui/CreateUser/CreateUser';

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

describe('features/user/CreateUser', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateUser', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CreateUser id="test1" setEntityModal={vi.fn()} />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-email'), { target: { value: 'lorem@mail.com' } });
    expect(getByTestId('PrimaryInput-email')).toHaveValue('lorem@mail.com');

    fireEvent.input(getByTestId('AutoCompleteInput-role').children[0].children[0].children[0], {
      target: { value: 'Dolor' },
    });
    fireEvent.click(getByText('Dolor'));

    expect(getByTestId('AutoCompleteInput-role').children[0].children[0].children[0]).toHaveValue(
      'Dolor',
    );
    expect(getByText('Create')).toBeVisible();
    fireEvent.click(getByText('Create'));
  });
});
