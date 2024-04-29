import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { User } from '@/shared/types/entities.types';

import { UpdateAuthedUserPassword } from '../ui/UpdateAuthedUserPassword/UpdateAuthedUserPassword';

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
    useGetAuthenticatedUser: () => ({
      data: {
        id: 1,
        display_name: 'display_name',
        email: 'test@mail.com',
        company: { id: 1, title: '', cover: {} },
        user_disciplines: [],
        google_calendar: {
          required: false,
        },
      } as User,
      isFetching: false,
      isSuccess: true,
    }),
  };

  return mockedModule;
});

describe('features/user/UpdateAuthedUserPassword', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateAuthedUserPassword', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateAuthedUserPassword />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-oldPassword'), { target: { value: 'password' } });
    expect(getByTestId('PrimaryInput-oldPassword')).toHaveValue('password');
    fireEvent.input(getByTestId('PrimaryInput-newPassword'), { target: { value: 'password' } });
    expect(getByTestId('PrimaryInput-newPassword')).toHaveValue('password');
    fireEvent.input(getByTestId('PrimaryInput-newPasswordRepeated'), {
      target: { value: 'password' },
    });
    expect(getByTestId('PrimaryInput-newPasswordRepeated')).toHaveValue('password');

    expect(getByText('Submit')).toBeVisible();
    fireEvent.click(getByText('Submit'));
  });
});
