import { useCallback, useMemo } from 'react';

import { FilterOptionList } from '@/entities/calendar';
import { useCustomSearchParams } from '@/shared/lib';
import { SelectableValueWithParent } from '@/shared/types/values.types';
import { Scrollbar } from '@/shared/ui/layouts';

import { filterParams } from '../../../../const';
import { ActiveFilterOption } from '../ActiveFilterOption/ActiveFilterOption';
import { FilterClearButton } from '../FilterClearButton/FilterClearButton';
import * as S from './FilterContent.styles';
import { FilterContentProps } from './FilterContent.types';

export const FilterContent: React.FC<FilterContentProps> = ({ filterOptions }) => {
  const { arrayParams, updateArrayParamValue, removeArrayParam, clearParams } =
    useCustomSearchParams(filterParams);

  const activeFilters = useMemo(() => {
    const activeFilterElements: SelectableValueWithParent[] = [];

    if (!filterOptions) {
      return activeFilterElements;
    }

    for (const filterName in arrayParams) {
      activeFilterElements.push(
        ...(filterOptions
          .find((item) => item.value === filterName)
          ?.children?.filter((item) => arrayParams[filterName]?.includes(item.value)) ?? []),
      );
    }

    return activeFilterElements;
  }, [arrayParams, filterOptions]);

  const onClearAllOptions = useCallback(() => {
    clearParams();
  }, [clearParams]);

  const onRemoveOption = useCallback(
    (param: string, value: string) => {
      removeArrayParam(param, value);
    },
    [removeArrayParam],
  );

  const onClickFilterOption = useCallback(
    (param: string, value: string) => {
      if (arrayParams[param]?.includes(value)) {
        removeArrayParam(param, value);
      } else {
        updateArrayParamValue(param, value);
      }
    },
    [arrayParams, removeArrayParam, updateArrayParamValue],
  );

  return (
    <S.Root>
      <FilterClearButton onClick={onClearAllOptions} />

      <S.FilterList>
        <Scrollbar noScrollX>
          {activeFilters.length > 0 && (
            <S.ActiveOptions>
              {activeFilters?.map((item) => (
                <ActiveFilterOption
                  key={item.value + item.parent}
                  label={item.label}
                  value={item.value}
                  parent={item.parent}
                  onClick={onRemoveOption}
                />
              ))}
            </S.ActiveOptions>
          )}

          <S.Options>
            <S.OptionListWrapper>
              {filterOptions?.map((item) => (
                <FilterOptionList
                  key={item.value}
                  item={item}
                  params={arrayParams}
                  onClickFilterOption={onClickFilterOption}
                />
              ))}
            </S.OptionListWrapper>
          </S.Options>
        </Scrollbar>
      </S.FilterList>
    </S.Root>
  );
};
