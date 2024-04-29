import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';

import { generateLinkFromArray } from '@/shared/lib';
import { Avatar } from '@/shared/ui/data-display';

import { actionTypes, entityTypes } from './NotificationItem.const';
import * as S from './NotificationItem.styles';
import { NotificationItemProps } from './NotificationItem.types';

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onReadUserNotification,
}) => {
  const theme = useTheme();

  const onReadNotification = () => {
    if (!notification.seen) {
      onReadUserNotification(notification.id);
    }
  };

  return (
    <S.Root onMouseEnter={onReadNotification}>
      <Avatar
        backgroundColor={theme.appColors.primary_01}
        fontSize="13px"
        size="32px"
        fontWeight="400"
        name={notification.author?.display_name}
        image={notification.author?.avatar?.url}
      />

      <S.Content>
        <S.ContentTitle>
          <S.Name>{notification.author?.display_name}</S.Name>{' '}
          <S.Action>
            <S.ActionName>
              {actionTypes[notification.entity?.action]?.text}{' '}
              {entityTypes[notification.entity?.type]?.text}
              <S.ActionIcon>{actionTypes[notification.entity?.action]?.Icon}</S.ActionIcon>
            </S.ActionName>
          </S.Action>
          <S.Title>
            {notification?.entity?.is_deleted === true ||
            !entityTypes[notification.entity?.type]?.link ? (
              <>{notification.entity?.title}</>
            ) : (
              <NavLink
                to={generateLinkFromArray(
                  entityTypes[notification.entity?.type]?.link ?? [],
                  String(notification.entity?.id),
                )}
              >
                {notification.entity?.title}
              </NavLink>
            )}
          </S.Title>
        </S.ContentTitle>

        <S.Date>{notification.time_ago}</S.Date>
      </S.Content>

      <S.StatusWrapper>
        <S.Status>{!notification.seen && 'new'}</S.Status>
      </S.StatusWrapper>
    </S.Root>
  );
};
