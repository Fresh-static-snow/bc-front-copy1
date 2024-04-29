import { axiosInstance } from '@/shared/api';

import { ReadUserNotificationsParams } from './userNotification.service.types';

export const readUserNotifications = async ({
  formData,
}: ReadUserNotificationsParams): Promise<void> => {
  await axiosInstance.post(`user_notifications/read`, formData);
};
