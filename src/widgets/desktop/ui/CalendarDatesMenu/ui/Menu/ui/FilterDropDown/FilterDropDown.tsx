import { useCallback, useState } from 'react';

import { IconSliderSvg } from '@/shared/assets';
import { Counter } from '@/shared/ui/data-display';
import { PrimaryButton } from '@/shared/ui/inputs';
import { DropDownButton } from '@/shared/ui/layouts';
import { DropDownChevron } from '@/shared/ui/misc';

import * as S from './FilterDropDown.styles';
import { FilterDropDownProps } from './FilterDropDown.types';

export const FilterDropDown: React.FC<FilterDropDownProps> = ({
  activeFiltersCount,
  ContentComponent,
}) => {
  // Anchor for filter popovers.
  const [filterAnchor, setFilterAnchor] = useState<HTMLButtonElement>(null);

  // Changing and clearing filter popover anchor.
  const onChangeFilterAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterAnchor(event.currentTarget);
  }, []);

  const onClearFilterAnchor = useCallback(() => {
    setFilterAnchor(null);
  }, []);

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label="Filter"
          variant="mixed"
          IconComponent={IconSliderSvg}
          AdditionalComponent={
            <S.FiltersAdditional>
              {!!activeFiltersCount && <Counter count={activeFiltersCount} />}
              <DropDownChevron active={!!filterAnchor} />
            </S.FiltersAdditional>
          }
          onClick={onChangeFilterAnchor}
        />
      }
      ContentComponent={ContentComponent}
      isOpen={!!filterAnchor}
      anchorEl={filterAnchor}
      onClose={onClearFilterAnchor}
    />
  );
};
