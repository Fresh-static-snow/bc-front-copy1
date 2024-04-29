import { useTheme } from '@emotion/react';

import { IconCrossSvg, IconEditSvg, IconTrashSvg } from '@/shared/assets';
import { Avatar } from '@/shared/ui/data-display/Avatar/Avatar';
import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';

import * as S from './CollapsibleFormHeader.styles';
import { CollapsibleFormHeaderProps } from './CollapsibleFormHeader.types';

export const CollapsibleFormHeader: React.FC<CollapsibleFormHeaderProps> = ({
  avatarName,
  avatarImage,
  title,
  subtitle,
  extendedStatus,
  onChangeExtendedStatus,
  onOpenConfirmationModal,
}) => {
  const theme = useTheme();

  return (
    <S.Root>
      <S.InfoWrapper>
        <Avatar
          name={avatarName}
          image={avatarImage}
          size="100px"
          backgroundColor={theme.appColors.primary_04}
          textColor={theme.appColors.secondary_04}
          fontSize="40px"
          fontWeight="400"
        />

        <S.NameWrapper>
          {title && <S.Name>{title}</S.Name>}

          {subtitle && <>{subtitle}</>}
        </S.NameWrapper>
      </S.InfoWrapper>

      <S.ControlWrapper>
        <PrimaryButton
          variant="outlined"
          IconComponent={extendedStatus ? IconCrossSvg : IconEditSvg}
          onClick={onChangeExtendedStatus}
          data-testid="PrimaryButton-edit"
        />

        <PrimaryButton
          variant="outlined"
          IconComponent={IconTrashSvg}
          onClick={onOpenConfirmationModal}
          data-testid="PrimaryButton-delete"
        />
      </S.ControlWrapper>
    </S.Root>
  );
};
