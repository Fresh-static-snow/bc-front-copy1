import { UseMutationResult } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { AxiosError } from 'axios';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useUpdateUser } from '@/entities/user';
import { UpdateUserParams } from '@/entities/user/api/users.service.types';
import { useAuthStore } from '@/shared/model/auth/auth.store';
import { User } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';

import { ConfirmGoogleCalendarIntegration } from '../ui/ConfirmGoogleCalendarIntegration/ConfirmGoogleCalendarIntegration';

describe('features/google-integration/ConfirmGoogleCalendarIntegration', () => {
  beforeEach(() => {
    vi.mock('@/entities/user');
    vi.mocked(useUpdateUser).mockReturnValue({
      isLoading: false,
      mutateAsync: vi.fn(),
      data: undefined,
      error: undefined,
      isError: false,
      isIdle: false,
      isSuccess: false,
      status: 'error',
      mutate: vi.fn(),
      reset: vi.fn(),
      context: undefined,
      failureCount: 0,
      failureReason: undefined,
      isPaused: false,
      variables: undefined,
    } as unknown as UseMutationResult<User, AxiosError<AxiosErrorContent, any>, UpdateUserParams, unknown>);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render ConfirmGoogleCalendarIntegration open and confirm sync', () => {
    vi.mock('@/shared/model/auth/auth.store');
    vi.mocked(useAuthStore).mockReturnValue({
      google_calendar: {
        required: true,
        status: false,
      },
    });

    const { getByText, getByTestId } = render(
      <TestProvider>
        <ConfirmGoogleCalendarIntegration />
      </TestProvider>,
    );

    expect(getByTestId('Dialog')).toBeVisible();

    fireEvent.click(getByText('OK'));
  });

  it('render ConfirmGoogleCalendarIntegration open and cancel', () => {
    vi.mock('@/shared/model/auth/auth.store');
    vi.mocked(useAuthStore).mockReturnValue({
      google_calendar: {
        link: '',
        required: true,
        status: false,
      },
    });

    const { getByText, getByTestId } = render(
      <TestProvider>
        <ConfirmGoogleCalendarIntegration />
      </TestProvider>,
    );

    expect(getByTestId('Dialog')).toBeVisible();

    fireEvent.click(getByText('Cancel'));
  });
});
