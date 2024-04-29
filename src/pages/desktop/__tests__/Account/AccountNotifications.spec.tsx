import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useGetUserAccountNotifications } from '@/entities/user';
import { useReadAllUserNotifications, useReadUserNotification } from '@/entities/user-notification';

import { AccountNotifications } from '../../ui/Account/ui/UserContent/ui/AccountNotifications/AccountNotifications';

describe('pages/desktop/Account/AccountNotifications', () => {
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

  it('render Account AccountNotifications', () => {
    vi.mock('@/entities/user-notification');
    vi.mock('@/entities/user');
    vi.mocked(useReadAllUserNotifications).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);
    vi.mocked(useReadUserNotification).mockReturnValue({
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

    const { getByText } = render(
      <TestProvider>
        <AccountNotifications />
      </TestProvider>,
    );

    expect(getByText('There are no notifications yet.')).toBeVisible();
  });

  it('render Account AccountNotifications', () => {
    vi.mock('@/entities/user-notification');
    vi.mock('@/entities/user');
    vi.mocked(useReadAllUserNotifications).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);
    vi.mocked(useReadUserNotification).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);
    vi.mocked(useGetUserAccountNotifications).mockReturnValue({
      data: {
        pages: [
          {
            total_pages: 2,
            start_id: 1,
            notifications: [
              {
                id: 1,
                author: {
                  id: 1,
                  avatar: { url: '' },
                  display_name: '',
                  first_name: '',
                  last_name: '',
                  nick: '',
                },
              },
            ],
          },
        ],
        pageParams: [],
      },
      error: undefined,
      isError: false,
      isLoading: false,
      isLoadingError: false,
      isRefetchError: false,
      isSuccess: false,
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
    } as any);

    const { getByTestId } = render(
      <TestProvider>
        <AccountNotifications />
      </TestProvider>,
    );

    expect(getByTestId('CircularLoader')).toBeVisible();
  });
});
