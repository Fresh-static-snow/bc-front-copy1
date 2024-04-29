import { useGetUserAccountNotifications } from '@/entities/user';
import {
  NotificationHeader,
  NotificationList,
  useReadAllUserNotifications,
  useReadUserNotification,
} from '@/entities/user-notification';
import { CircularLoader } from '@/shared/ui/feedback';
import { InfinityScrollbar } from '@/shared/ui/layouts';

import * as S from './AccountNotifications.styles';

export const AccountNotifications: React.FC = () => {
  const {
    data: userNotificationsData,
    isFetchingNextPage: isFetchingUserNotificationsNextPage,
    hasNextPage: hasUserNotificationsNextPage,
    fetchNextPage: fetchNextUserNotificationsPage,
  } = useGetUserAccountNotifications();

  const { mutate: onReadUserNotification } = useReadUserNotification();
  const { mutate: onReadAllUserNotifications } = useReadAllUserNotifications();

  return (
    <S.Root>
      <S.NotificationsElement>
        <NotificationHeader onReadAllUserNotifications={onReadAllUserNotifications} />
      </S.NotificationsElement>

      <S.Content>
        <InfinityScrollbar
          fetchNextPage={fetchNextUserNotificationsPage}
          canFetchNextPage={hasUserNotificationsNextPage && !isFetchingUserNotificationsNextPage}
        >
          {!userNotificationsData?.pages?.[0]?.notifications?.length ? (
            <S.EmptyNotifications>There are no notifications yet.</S.EmptyNotifications>
          ) : (
            <S.NotificationsElement>
              <NotificationList
                notificationPages={userNotificationsData?.pages}
                onReadUserNotification={onReadUserNotification}
              />

              {isFetchingUserNotificationsNextPage && (
                <S.LoaderWrapper>
                  <CircularLoader />
                </S.LoaderWrapper>
              )}
            </S.NotificationsElement>
          )}
        </InfinityScrollbar>
      </S.Content>
    </S.Root>
  );
};
