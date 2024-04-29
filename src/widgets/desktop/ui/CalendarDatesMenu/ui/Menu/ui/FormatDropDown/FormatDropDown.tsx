import { useCallback, useState } from 'react';

import { IconEyeSvg } from '@/shared/assets';
import { SelectableValue } from '@/shared/types/values.types';
import { ButtonList, PrimaryButton } from '@/shared/ui/inputs';
import { DropDownButton } from '@/shared/ui/layouts';
import { DropDownChevron } from '@/shared/ui/misc';

import * as S from './FormatDropDown.styles';
import { FormatDropDownProps } from './FormatDropDown.types';

export const FormatDropDown: React.FC<FormatDropDownProps> = ({
  calendarFormatValue,
  setCalendarFormat,
  formatButtons,
}) => {
  // Anchors for format popover.
  const [formatAnchor, setFormatAnchor] = useState<HTMLButtonElement>(null);

  // Changing and clearing format popover anchor.
  const onChangeFormatAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setFormatAnchor(event.currentTarget);
  }, []);

  const onClearFormatAnchor = useCallback(() => {
    setFormatAnchor(null);
  }, []);

  const onChangeActiveFormat = useCallback(
    (newFormat: SelectableValue) => {
      setCalendarFormat(newFormat);
      onClearFormatAnchor();
    },
    [onClearFormatAnchor, setCalendarFormat],
  );

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label={calendarFormatValue.label}
          variant="mixed"
          IconComponent={IconEyeSvg}
          AdditionalComponent={
            <S.FormatAdditional>
              <DropDownChevron active={!!formatAnchor} />
            </S.FormatAdditional>
          }
          onClick={onChangeFormatAnchor}
        />
      }
      ContentComponent={
        <ButtonList
          width="130px"
          buttonList={formatButtons}
          activeButton={calendarFormatValue}
          onChangeActiveButton={onChangeActiveFormat}
        />
      }
      isOpen={!!formatAnchor}
      anchorEl={formatAnchor}
      onClose={onClearFormatAnchor}
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
