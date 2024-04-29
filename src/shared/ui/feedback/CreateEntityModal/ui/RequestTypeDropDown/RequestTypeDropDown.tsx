import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';

import { SelectableValue } from '@/shared/types/values.types';
import { ButtonList, PrimaryButton } from '@/shared/ui/inputs';
import { DropDownButton } from '@/shared/ui/layouts';
import { DropDownChevron } from '@/shared/ui/misc';

import * as S from './RequestTypeDropDown.styles';
import { RequestTypeDropDownProps } from './RequestTypeDropDown.types';

export const RequestTypeDropDown: React.FC<RequestTypeDropDownProps> = ({
  requestButtons,
  requestType,
  setRequestType,
}) => {
  const theme = useTheme();
  // Anchors for request type popover.
  const [requestTypeAnchor, setRequestTypeAnchor] = useState<HTMLButtonElement>(null);

  // Changing and clearing request type popover anchor.
  const onChangeRequestTypeAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setRequestTypeAnchor(event.currentTarget);
  }, []);

  const onClearRequestTypeAnchor = useCallback(() => {
    setRequestTypeAnchor(null);
  }, []);

  const onChangeActiveRequestType = useCallback(
    (newRequestType: SelectableValue) => {
      setRequestType(newRequestType);
      onClearRequestTypeAnchor();
    },
    [onClearRequestTypeAnchor, setRequestType],
  );

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label={requestType.label}
          variant="custom"
          customStyles={{
            backgroundColor: theme.appColors.secondary_03,
            backgroundColorHovered: theme.appColors.secondary_07,
            backgroundColorActive: theme.appColors.secondary_08,
          }}
          width="133px"
          fontSize="12px"
          AdditionalComponent={
            <S.RequestTypeAdditional>
              <DropDownChevron active={!!requestTypeAnchor} size="16px" />
            </S.RequestTypeAdditional>
          }
          onClick={onChangeRequestTypeAnchor}
          contentPosition="between"
        />
      }
      ContentComponent={
        <ButtonList
          width="150px"
          buttonList={requestButtons}
          activeButton={requestType}
          onChangeActiveButton={onChangeActiveRequestType}
        />
      }
      isOpen={!!requestTypeAnchor}
      anchorEl={requestTypeAnchor}
      onClose={onClearRequestTypeAnchor}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    />
  );
};
