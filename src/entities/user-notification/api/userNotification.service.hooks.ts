import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { produce } from 'immer';
import { useSnackbar } from 'notistack';

import { MANAGEMENT, USERS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { UserNotificationPage } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';

import * as usersNotificationsService from './userNotification.service';

const userKeys = [USERS.USER_NOTIFICATIONS_COUNT];
const notificationKeys = [
  USERS.USER_NOTIFICATIONS,
  USERS.USER_ACCOUNT_NOTIFICATIONS,
  MANAGEMENT.NOTIFICATIONS,
];

export const useReadUserNotification = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (id: number) => {
      const formData = new FormData();
      formData.append('id', String(id));

      return usersNotificationsService.readUserNotifications({ formData });
    },
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: (data, variables) => {
      userKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });

      notificationKeys.forEach((queryKey) => {
        queryClient.setQueryData<InfiniteData<UserNotificationPage>>([queryKey], (oldData) =>
          produce(oldData, (draft) => {
            const activePage = draft?.pages?.find(
              (page) => page?.notifications?.findIndex((elem) => elem?.id === variables) !== -1,
            );

            if (activePage) {
              const notification = activePage.notifications?.find((elem) => elem?.id === variables);

              if (notification) {
                notification.seen = true;
              }
            }
          }),
        );
      });
    },
  });
};

export const useReadAllUserNotifications = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: () => usersNotificationsService.readUserNotifications({}),
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      notificationKeys.forEach((queryKey) => {
        queryClient.setQueryData<InfiniteData<UserNotificationPage>>([queryKey], (oldData) => {
          const newPages = oldData?.pages?.map((page) => ({
            ...page,
            notifications: page?.notifications?.map((notification) => ({
              ...notification,
              seen: true,
            })),
          }));

          return { ...oldData, pages: newPages };
        });
      });

      userKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
    },
  });
};
