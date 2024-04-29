import { useTheme } from '@emotion/react';

import { Avatar } from '@/shared/ui/data-display/Avatar/Avatar';

import { AvatarBadgeProps } from './AvatarBadge.types';

/**
 * The badge component which displays the user avatar in the option or select.
 */
export const AvatarBadge: React.FC<AvatarBadgeProps> = ({ option, type = 'option' }) => {
  const theme = useTheme();

  return (
    <Avatar
      size={type === 'input' ? '32px' : '20px'}
      fontSize={type === 'input' ? '13px' : '10px'}
      fontWeight={type === 'input' ? '400' : '600'}
      name={option.label}
      image={option.additional}
      backgroundColor={theme.appColors.secondary_03}
      textColor={theme.appColors.secondary_04}
    />
  );
};
