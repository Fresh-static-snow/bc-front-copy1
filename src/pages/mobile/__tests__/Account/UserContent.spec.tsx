import { UseInfiniteQueryResult } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import AccountNotifications from '@/pages/mobile/ui/Account/ui/UserContent/ui/AccountNotifications/AccountNotifications';
import { UserNotificationPage } from '@/shared/types/entities.types';

import UserInfo from '../../ui/Account/ui/UserContent/ui/UserInfo/UserInfo';

describe('pages/mobile/Account/UserContent', () => {
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

  test('render AccountNotifications', () => {
    vi.mock('@/entities/user', async () => {
      const actualModule = await vi.importActual<typeof import('@/entities/user')>(
        '@/entities/user',
      );

      const mockedModule: DeepPartial<typeof import('@/entities/user')> = {
        ...actualModule,
        useGetUserAccountNotifications: () =>
          mock<UseInfiniteQueryResult<UserNotificationPage>>(
            {
              data: {
                pages: [
                  {
                    notifications: [
                      {
                        id: 1,
                        description: 'Lorem',
                        seen: false,
                        time_ago: 'Lorem ago',
                        title: 'Ipsum',
                      },
                    ],
                  },
                ],
              },
            },
            { deep: true },
          ),
      };

      return mockedModule;
    });

    const { getByText } = render(
      <TestProvider>
        <AccountNotifications />
      </TestProvider>,
    );

    expect(getByText('Lorem ago')).toBeVisible();
  });

  test('render Account UserInfo', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UserInfo />
      </TestProvider>,
    );

    expect(getByTestId('Avatar')).toBeVisible();

    fireEvent.click(getByTestId('Avatar'));

    expect(getByText('Edit')).toBeVisible();
  });
});
