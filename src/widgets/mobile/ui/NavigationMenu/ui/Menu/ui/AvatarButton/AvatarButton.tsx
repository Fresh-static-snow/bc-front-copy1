import { useTheme } from '@emotion/react';

import { useAuthStore } from '@/shared/model/auth/auth.store';
import { Avatar } from '@/shared/ui/data-display';

import { AvatarButtonProps } from './AvatarButton.types';

export const AvatarButton: React.FC<AvatarButtonProps> = ({ setOpenContentDrawer }) => {
  const theme = useTheme();
  const authedUser = useAuthStore((state) => state.authedUser);

  const onOpenContentDrawer = () => {
    setOpenContentDrawer(true);
  };

  return (
    <button type="button" onClick={onOpenContentDrawer} data-testid="AvatarButton">
      <Avatar
        name={authedUser?.display_name}
        image={authedUser?.avatar?.url}
        size="26px"
        textColor={theme.appColors.primary_01}
        borderColor={authedUser?.avatar?.url ? undefined : theme.appColors.primary_01}
        fontSize="10px"
      />
    </button>
  );
};
