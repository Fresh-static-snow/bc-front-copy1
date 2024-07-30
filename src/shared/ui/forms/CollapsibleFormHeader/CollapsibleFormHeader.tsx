import { IconCrossSvg, IconEditSvg, IconTrashSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';

import * as S from './CollapsibleFormHeader.styles';
import { CollapsibleFormHeaderProps } from './CollapsibleFormHeader.types';

export const CollapsibleFormHeader: React.FC<CollapsibleFormHeaderProps> = ({
  AvatarComponent,
  title,
  subtitle,
  extendedStatus,
  onChangeExtendedStatus,
  onOpenConfirmationModal,
}) => (
  <S.Root>
    <S.InfoWrapper>
      {AvatarComponent}

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
