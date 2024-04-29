import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './NotificationHeader.styles';
import { HeaderProps } from './NotificationHeader.types';

export const NotificationHeader: React.FC<HeaderProps> = ({
  padding,
  onReadAllUserNotifications,
}) => (
  <S.Root $padding={padding}>
    <PrimaryButton
      label="Mark all as read"
      variant="secondary"
      onClick={onReadAllUserNotifications}
    />
  </S.Root>
);
