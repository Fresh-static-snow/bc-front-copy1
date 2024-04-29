import { useCallback, useState } from 'react';

import { PrimaryButton } from '@/shared/ui/inputs';
import { DropDownButton } from '@/shared/ui/layouts';
import { DropDownChevron } from '@/shared/ui/misc';

import * as S from './DatesDropDown.styles';
import { DatesDropDownProps } from './DatesDropDown.types';

export const DatesDropDown: React.FC<DatesDropDownProps> = ({ label, ContentComponent }) => {
  // Anchor for date popovers.
  const [dateAnchor, setDateAnchor] = useState<HTMLButtonElement>(null);

  // Changing and clearing date popover anchor.
  const onChangeDateAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setDateAnchor(event.currentTarget);
  }, []);

  const onClearDateAnchor = useCallback(() => {
    setDateAnchor(null);
  }, []);

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label={label}
          variant="secondary"
          AdditionalComponent={
            <S.DateAdditional>
              <DropDownChevron active={!!dateAnchor} />
            </S.DateAdditional>
          }
          onClick={onChangeDateAnchor}
        />
      }
      ContentComponent={ContentComponent}
      isOpen={!!dateAnchor}
      anchorEl={dateAnchor}
      onClose={onClearDateAnchor}
    />
  );
};
