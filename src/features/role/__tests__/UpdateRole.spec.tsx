import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { debugInBrowser, TestProvider } from '@/app/__tests__';

import { UpdateRole } from '../ui/UpdateRole/UpdateRole';

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
    useGetRoleForm: () => ({
      isSuccess: true,
      isFetching: false,
      data: {
        id: 'number',
        permissions: [],
      },
    }),
    useGetRolePermissions: () => ({
      isSuccess: true,
      isFetching: false,
      data: [
        {
          title: 'title',
          elemId: '',
          description: '',
        },
      ],
    }),
  };

  return mockedModule;
});

describe('features/role/UpdateRole', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateRole', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateRole
          requestType={{ label: 'studio', value: 'studio', additional: '1' }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');

    debugInBrowser();

    expect(getByText('Update')).toBeVisible();
    fireEvent.click(getByText('Update'));
  });
});
