import { Fragment } from 'react';

import { NotificationListProps } from './NotificationList.types';
import { NotificationItem } from './ui/NotificationItem';

export const NotificationList: React.FC<NotificationListProps> = ({
  notificationPages,
  onReadUserNotification,
}) => (
  <>
    {notificationPages?.map(({ notifications }, index) => (
      <Fragment key={notifications?.[0]?.id ?? index}>
        {notifications?.map((notification) => (
          <NotificationItem
            key={notification?.id}
            notification={notification}
            onReadUserNotification={onReadUserNotification}
          />
        ))}
      </Fragment>
    ))}
  </>
);
