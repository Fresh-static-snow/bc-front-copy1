import { UserNotificationPage } from '@/shared/types/entities.types';

export type NotificationsContentProps = {
  notificationPages: UserNotificationPage[];
  isLoadingPage: boolean;
  hasMorePages: boolean;
  onLoadMore?: () => void;
  onReadUserNotification: (id: number) => void;
  onReadAllUserNotifications: () => void;
};
