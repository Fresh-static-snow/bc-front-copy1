import { useCallback, useState } from 'react';

import { IconBellSvg } from '@/shared/assets';
import { Counter } from '@/shared/ui/data-display';
import { PrimaryButton } from '@/shared/ui/inputs';
import { DropDownButton } from '@/shared/ui/layouts';

import * as S from './NotificationsDropDown.styles';
import { NotificationsDropDownProps } from './NotificationsDropDown.types';

export const NotificationsDropDown: React.FC<NotificationsDropDownProps> = ({
  ContentComponent,
  notificationsCount,
}) => {
  // Anchor for notifications popovers.
  const [notificationsAnchor, setNotificationsAnchor] = useState<HTMLButtonElement>(null);

  // Changing and clearing notifications popover anchor.
  const onChangeNotificationsAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setNotificationsAnchor(event.currentTarget);
  }, []);

  const onClearNotificationsAnchor = useCallback(() => {
    setNotificationsAnchor(null);
  }, []);

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label="Notifications"
          variant="mixed"
          IconComponent={IconBellSvg}
          AdditionalComponent={
            <S.NotificationsAdditional>
              {!!notificationsCount && <Counter count={notificationsCount} />}
            </S.NotificationsAdditional>
          }
          onClick={onChangeNotificationsAnchor}
        />
      }
      ContentComponent={ContentComponent}
      isOpen={!!notificationsAnchor}
      anchorEl={notificationsAnchor}
      onClose={onClearNotificationsAnchor}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      orientation="bottom"
    />
  );
};
