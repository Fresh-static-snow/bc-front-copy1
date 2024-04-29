import { useGetDashboardNotifications } from '@/entities/management';
import {
  NotificationHeader,
  NotificationList,
  useReadAllUserNotifications,
  useReadUserNotification,
} from '@/entities/user-notification';
import { CircularLoader } from '@/shared/ui/feedback';
import { InfinityScrollbar } from '@/shared/ui/layouts';

import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  const {
    data: dashboardNotificationsData,
    isFetchingNextPage: isFetchingDashboardNotificationsNextPage,
    hasNextPage: hasDashboardNotificationsNextPage,
    fetchNextPage: fetchNextDashboardNotificationsPage,
  } = useGetDashboardNotifications();
  const { mutate: onReadUserNotification } = useReadUserNotification();
  const { mutate: onReadAllUserNotifications } = useReadAllUserNotifications();

  return (
    <S.Root>
      <S.NotificationsElement>
        <NotificationHeader onReadAllUserNotifications={onReadAllUserNotifications} />
      </S.NotificationsElement>

      <S.Content>
        <InfinityScrollbar
          fetchNextPage={fetchNextDashboardNotificationsPage}
          canFetchNextPage={
            hasDashboardNotificationsNextPage && !isFetchingDashboardNotificationsNextPage
          }
        >
          {dashboardNotificationsData?.pages?.[0]?.notifications?.length === 0 ? (
            <S.EmptyNotifications>There are no notifications yet.</S.EmptyNotifications>
          ) : (
            <S.NotificationsElement>
              <NotificationList
                notificationPages={dashboardNotificationsData?.pages}
                onReadUserNotification={onReadUserNotification}
              />

              {isFetchingDashboardNotificationsNextPage && (
                <CircularLoader size="24px" width="100%" padding="24px 0" />
              )}
            </S.NotificationsElement>
          )}
        </InfinityScrollbar>
      </S.Content>
    </S.Root>
  );
};
