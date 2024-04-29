import { InfiniteData } from '@tanstack/react-query';
import { produce } from 'immer';

import { useGetDashboardNotifications } from '@/entities/management/api/management.service.hooks';
import { useGetUserAccountNotifications } from '@/entities/user';
import { MANAGEMENT, USERS } from '@/shared/api';
import { useCheckAccess, useWebSocket } from '@/shared/lib';
import { UserNotification, UserNotificationPage } from '@/shared/types/entities.types';

export const useWebSocketNotifications = () => {
  const checkAccess = useCheckAccess();

  // * Get base list of user notifications.
  const { data: userNotificationsData } = useGetUserAccountNotifications();
  // * Get base list of management management notifications.
  const { data: managementNotificationsData } = useGetDashboardNotifications(
    checkAccess(['get::/api/v1/dashboard/notifications']),
  );

  // * Subscribe to user notifications.
  useWebSocket<InfiniteData<UserNotificationPage>, UserNotification>({
    enabled: !!userNotificationsData,
    webSocketURL:
      (import.meta.env.VITE_WEBSOCKET_BASE_URL as string) ?? 'ws://localhost:3000/cable',
    subscriptionOptions: {
      channel: 'NotifyCalendarChannel',
    },
    queryKeys: [USERS.USER_NOTIFICATIONS, USERS.USER_ACCOUNT_NOTIFICATIONS],
    invalidationKeys: [USERS.USER_NOTIFICATIONS_COUNT],
    queryCallback: (message) => (oldData) =>
      produce(oldData, (draft) => {
        if (draft.pages?.[0]) {
          const page = draft.pages[0];
          page.notifications = [message, ...(page.notifications ?? [])];
        }
      }),
  });

  // * Subscribe to management dashboard notifications.
  useWebSocket<InfiniteData<UserNotificationPage>, UserNotification>({
    enabled: !!managementNotificationsData,
    webSocketURL:
      (import.meta.env.VITE_WEBSOCKET_BASE_URL as string) ?? 'ws://localhost:3000/cable',
    subscriptionOptions: {
      channel: 'NotifyDashboardChannel',
    },
    queryKeys: [MANAGEMENT.NOTIFICATIONS],
    queryCallback: (message) => (oldData) =>
      produce(oldData, (draft) => {
        if (draft.pages?.[0]) {
          const page = draft.pages[0];
          page.notifications = [message, ...(page.notifications ?? [])];
        }
      }),
  });
};
