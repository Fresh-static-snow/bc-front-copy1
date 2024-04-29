import { useCallback, useState } from 'react';

import { SelectableValue } from '@/shared/types/values.types';
import { DropDownButton } from '@/shared/ui/layouts/DropDownButton/DropDownButton';
import { DropDownChevron } from '@/shared/ui/misc/DropDownChevron/DropDownChevron';

import { ButtonList } from '../ButtonList/ButtonList';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import * as S from './SortButton.styles';
import { SortButtonProps } from './SortButton.types';

export const SortButton: React.FC<SortButtonProps> = ({
  sortingValue,
  setSortingValue,
  sortingButtons,
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
      setSortingValue(newFormat);
      onClearFormatAnchor();
    },
    [onClearFormatAnchor, setSortingValue],
  );

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label={`Sort by ${sortingValue.label}`}
          variant="base"
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
          buttonList={sortingButtons}
          activeButton={sortingValue}
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
