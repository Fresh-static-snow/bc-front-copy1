import { useGetUserNotifications, useGetUserNotificationsCount } from '@/entities/user';
import { useReadAllUserNotifications, useReadUserNotification } from '@/entities/user-notification';
import { IconHelpCircleSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs';

import { NotificationsContent } from '../NotificationsContent/NotificationsContent';
import { NotificationsDropDown } from '../NotificationsDropDown/NotificationsDropDown';
import * as S from './Footer.styles';

export const Footer: React.FC = () => {
  const { data: userNotificationsCountData } = useGetUserNotificationsCount();
  const {
    data: userNotificationsData,
    isFetchingNextPage: isFetchingUserNotificationsNextPage,
    hasNextPage: hasUserNotificationsNextPage,
    fetchNextPage: fetchNextUserNotificationsPage,
  } = useGetUserNotifications();

  const { mutate: onReadUserNotification } = useReadUserNotification();
  const { mutate: onReadAllUserNotifications } = useReadAllUserNotifications();

  return (
    <S.Root>
      <S.Info>
        <NotificationsDropDown
          ContentComponent={
            <NotificationsContent
              notificationPages={userNotificationsData?.pages}
              isLoadingPage={isFetchingUserNotificationsNextPage}
              hasMorePages={hasUserNotificationsNextPage}
              onLoadMore={fetchNextUserNotificationsPage}
              onReadUserNotification={onReadUserNotification}
              onReadAllUserNotifications={onReadAllUserNotifications}
            />
          }
          notificationsCount={userNotificationsCountData}
        />
        <PrimaryButton label="Help" variant="mixed" IconComponent={IconHelpCircleSvg} disabled />
      </S.Info>
    </S.Root>
  );
};
