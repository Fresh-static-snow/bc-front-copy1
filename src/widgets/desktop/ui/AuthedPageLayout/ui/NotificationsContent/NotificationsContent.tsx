import { NotificationHeader, NotificationList } from '@/entities/user-notification';
import { CircularLoader } from '@/shared/ui/feedback';
import { InfinityScrollbar } from '@/shared/ui/layouts';

import * as S from './NotificationsContent.styles';
import { NotificationsContentProps } from './NotificationsContent.types';

export const NotificationsContent: React.FC<NotificationsContentProps> = ({
  notificationPages,
  hasMorePages,
  isLoadingPage,
  onLoadMore,
  onReadUserNotification,
  onReadAllUserNotifications,
}) => (
  <S.Root>
    <NotificationHeader
      padding="6px 24px 10px"
      onReadAllUserNotifications={onReadAllUserNotifications}
    />

    <InfinityScrollbar fetchNextPage={onLoadMore} canFetchNextPage={hasMorePages && !isLoadingPage}>
      {notificationPages?.[0]?.notifications?.length === 0 ? (
        <S.EmptyNotifications>There are no notifications yet.</S.EmptyNotifications>
      ) : (
        <S.ListWrapper>
          <NotificationList
            notificationPages={notificationPages}
            onReadUserNotification={onReadUserNotification}
          />

          {isLoadingPage && (
            <S.LoaderWrapper>
              <CircularLoader />
            </S.LoaderWrapper>
          )}
        </S.ListWrapper>
      )}
    </InfinityScrollbar>
  </S.Root>
);
