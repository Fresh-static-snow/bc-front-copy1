import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { UserCompanyForm } from '@/shared/types/entities.types';

import { UpdateUserCompany } from '../ui/UpdateUserCompany/UpdateUserCompany';

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
    useGetUserCompanyForm: () => ({
      data: {
        id: 1,
      } as UserCompanyForm,
      isFetching: false,
      isSuccess: true,
    }),
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

describe('features/user/UpdateUserCompany', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateUserCompany', async () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateUserCompany companyId="1" deleteBackPath={undefined} sendBackPath={undefined} />
      </TestProvider>,
    );
    fireEvent.click(getByTestId('PrimaryButton-edit'));

    fireEvent.input(getByTestId('PrimaryInput-companyName'), { target: { value: 'company' } });
    expect(getByTestId('PrimaryInput-companyName')).toHaveValue('company');

    const imageUrl = faker.image.url();
    const imageFile = await fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const mockFile = new File([blob], 'test.png', { type: 'image/png' });
        return mockFile;
      });

    await waitFor(() =>
      fireEvent.change(getByTestId('PrimaryDropzone-cover'), {
        target: { files: [imageFile] },
      }),
    );

    expect(getByText('Update')).toBeVisible();
    fireEvent.click(getByText('Update'));
  });
});
