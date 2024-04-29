import { memo } from 'react';

import { Checkbox } from '@/shared/ui/inputs';

import * as S from './FilterOption.styles';
import { FilterOptionProps } from './FilterOption.types';

export const FilterOption: React.FC<FilterOptionProps> = memo(
  ({ label, value, parent, params, onClickFilterOption }) => {
    const onClickFilterButton = () => {
      onClickFilterOption(parent, value);
    };

    return (
      <S.Root key={value + parent} onClick={onClickFilterButton}>
        <Checkbox checked={params[parent]?.includes(value) ?? false} label={label} tabIndex={-1} />
      </S.Root>
    );
  },
);
