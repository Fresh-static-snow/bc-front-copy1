import { useTheme } from '@emotion/react';

import { Avatar } from '@/shared/ui/data-display/Avatar/Avatar';
import { NavigationButton } from '@/shared/ui/navigation/NavigationButton/NavigationButton';

import * as S from './NavigationItem.styles';
import { NavigationItemProps } from './NavigationItem.types';

export const NavigationItem: React.FC<NavigationItemProps> = ({
  linkPath,
  name,
  avatarImage,
  AdditionalComponent,
  activePathExact = true,
  variant = 'secondary',
  padding,
}) => {
  const theme = useTheme();

  return (
    <NavigationButton
      href={linkPath}
      activePathString={linkPath}
      activePathExact={activePathExact}
      variant={variant}
      padding={padding}
    >
      <S.Content>
        <S.MainInfo>
          <Avatar
            name={name}
            image={avatarImage}
            size="32px"
            backgroundColor={theme.appColors.primary_01}
            fontSize="13px"
            fontWeight="400"
          />

          {name}
        </S.MainInfo>

        {AdditionalComponent && <S.AdditionalInfo>{AdditionalComponent}</S.AdditionalInfo>}
      </S.Content>
    </NavigationButton>
  );
};
