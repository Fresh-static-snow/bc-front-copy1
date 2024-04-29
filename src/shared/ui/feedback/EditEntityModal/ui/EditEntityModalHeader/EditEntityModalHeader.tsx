import { useTheme } from '@emotion/react';

import { PrimaryButton } from '@/shared/ui/inputs';
import { DropDownChevron } from '@/shared/ui/misc';

import * as S from './EditEntityModalHeader.styles';
import { EditEntityModalHeaderProps } from './EditEntityModalHeader.types';

export const EditEntityModalHeader: React.FC<EditEntityModalHeaderProps> = ({ requestType }) => {
  const theme = useTheme();

  return (
    <S.Root>
      <S.Title>Edit item</S.Title>

      <S.RequestType>
        <S.InputLabelText>Request type:</S.InputLabelText>

        <PrimaryButton
          label={requestType}
          variant="custom"
          customStyles={{
            backgroundColor: theme.appColors.secondary_03,
            backgroundColorHovered: theme.appColors.secondary_07,
            backgroundColorActive: theme.appColors.secondary_08,
            backgroundColorDisabled: theme.appColors.secondary_03,
            disabledOpacity: '0.5',
          }}
          width="133px"
          fontSize="12px"
          AdditionalComponent={
            <S.RequestTypeAdditional>
              <DropDownChevron size="16px" />
            </S.RequestTypeAdditional>
          }
          contentPosition="between"
          disabled
        />
      </S.RequestType>
    </S.Root>
  );
};
