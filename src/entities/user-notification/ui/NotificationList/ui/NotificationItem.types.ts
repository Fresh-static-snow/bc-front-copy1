import { UserNotification } from '@/shared/types/entities.types';

export type NotificationItemProps = {
  notification: UserNotification;
  onReadUserNotification: (id: number) => void;
};

export type ActionType = {
  text: string;
  Icon: React.ReactNode;
};

export type EntityType = {
  text: string;
  link: (string | null)[];
};

export type NotificationActionTypes = Record<string, ActionType>;
export type NotificationEntityTypes = Record<string, EntityType>;
