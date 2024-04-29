import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { debugInBrowser, TestProvider } from '@/app/__tests__';

import { CreateRole } from '../ui/CreateRole/CreateRole';

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
    useGetRolePermissions: () => ({
      isSuccess: true,
    }),
  };

  return mockedModule;
});

describe('features/role/CreateRole', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateRole', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CreateRole setEntityModal={vi.fn()} />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');

    debugInBrowser();

    expect(getByText('Create')).toBeVisible();
    fireEvent.click(getByText('Create'));
  });
});
