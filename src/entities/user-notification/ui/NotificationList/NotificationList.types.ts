import { UserNotificationPage } from '@/shared/types/entities.types';

export type NotificationListProps = {
  notificationPages: UserNotificationPage[];
  onReadUserNotification: (id: number) => void;
};
