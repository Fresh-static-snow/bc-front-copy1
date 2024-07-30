import { useCallback, useState } from 'react';

import { IconEyeSvg } from '@/shared/assets';
import { SelectableValue } from '@/shared/types/values.types';
import { ButtonList, PrimaryButton } from '@/shared/ui/inputs';
import { DropDownButton } from '@/shared/ui/layouts';
import { DropDownChevron } from '@/shared/ui/misc';

import * as S from './HeadingDropDown.styles';
import { HeadingDropDownProps } from './HeadingDropDown.types';

export const HeadingDropDown: React.FC<HeadingDropDownProps> = ({ value, setValue, buttons }) => {
  const [formatAnchor, setFormatAnchor] = useState<HTMLButtonElement>(null);

  const onChangeFormatAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setFormatAnchor(event.currentTarget);
  }, []);

  const onClearFormatAnchor = useCallback(() => {
    setFormatAnchor(null);
  }, []);

  const onChangeActiveFormat = useCallback(
    (newFormat: SelectableValue) => {
      setValue(newFormat);
      onClearFormatAnchor();
    },
    [onClearFormatAnchor, setValue],
  );

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label={value.label}
          variant="base"
          AdditionalComponent={
            <S.Additional>
              <DropDownChevron active={!!formatAnchor} />
            </S.Additional>
          }
          onClick={onChangeFormatAnchor}
          width="105px"
          contentPosition="between"
        />
      }
      ContentComponent={
        <ButtonList
          width="130px"
          buttonList={buttons}
          activeButton={value}
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
