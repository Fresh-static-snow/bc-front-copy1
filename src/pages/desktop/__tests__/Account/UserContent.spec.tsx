import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import {
  useGetAuthenticatedUser,
  useGetUserAccountNotifications,
  useUpdateUser,
  useUpdateUserAvatar,
} from '@/entities/user';
import { useReadAllUserNotifications, useReadUserNotification } from '@/entities/user-notification';

import PageLayout from '../../ui/Account/ui/PageLayout/PageLayout';
import UserContent from '../../ui/Account/ui/UserContent/UserContent';

describe('pages/desktop/Account/UserContent', () => {
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

  it('render Account UserContent', () => {
    vi.mock('@/entities/user');
    vi.mock('@/entities/user-notification');
    vi.mocked(useUpdateUser).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      isLoading: false,
    } as any);
    vi.mocked(useUpdateUserAvatar).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      isLoading: false,
    } as any);
    vi.mocked(useGetAuthenticatedUser).mockReturnValue({
      data: {
        id: 0,
        company: undefined,
        confirmed: false,
        deactivated: false,
        email: '',
        display_name: '',
        first_name: '',
        last_name: '',
        nick: '',
        avatar: { url: '' },
        user_disciplines: [],
        roles: [],
        google_calendar: undefined,
      },
      isFetching: false,
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);
    vi.mocked(useGetUserAccountNotifications).mockReturnValue({
      data: {
        pages: [{ notifications: [] }],
      },
      hasNextPage: true,
      error: undefined,
      isError: false,
      isLoading: false,
      isLoadingError: false,
      isRefetchError: false,
      isSuccess: false,
      status: 'error',
      fetchNextPage: vi.fn(),
      fetchPreviousPage: vi.fn(),
      isFetchingNextPage: true,
      isFetchingPreviousPage: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: undefined,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isInitialLoading: false,
      isPaused: false,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetching: false,
      isStale: false,
      refetch: vi.fn(),
      remove: vi.fn(),
      fetchStatus: 'fetching',
    } as any);
    vi.mocked(useReadAllUserNotifications).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);
    vi.mocked(useReadUserNotification).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);

    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<UserContent />} />
        </Route>
      </TestProvider>,
    );

    expect(getByText('Back to')).toBeVisible();
    expect(getByText('Edit')).toBeVisible();
  });
});
