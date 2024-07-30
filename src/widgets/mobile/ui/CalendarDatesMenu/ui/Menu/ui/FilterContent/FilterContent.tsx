import { useTheme } from '@emotion/react';
import { useCallback, useMemo } from 'react';

import { FilterOptionList } from '@/entities/calendar';
import { IconChevronLeftSvg, IconRefreshCwSvg } from '@/shared/assets';
import { useCustomSearchParams } from '@/shared/lib';
import { PrimaryButton } from '@/shared/ui/inputs';
import { SubMenu } from '@/shared/ui/layouts';

import { filterParams } from '../../../../const';
import * as S from './FilterContent.styles';
import { FilterContentProps } from './FilterContent.types';

export const FilterContent: React.FC<FilterContentProps> = ({
  calendarFiltersOptions,
  onCloseFilterModal,
}) => {
  const theme = useTheme();
  const { arrayParams, updateArrayParamValue, removeArrayParam, clearParams } =
    useCustomSearchParams(filterParams);

  const calendarFiltersCount = useMemo(
    () => Object.values(arrayParams).reduce((acc, item) => acc + item.length, 0),
    [arrayParams],
  );

  const onClearAllOptions = useCallback(() => {
    clearParams();
  }, [clearParams]);

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
      <SubMenu
        title="Filter"
        backButtonPrimaryLabel=""
        borderNone
        backgroundColor={theme.appColors.secondary_06}
        AdditionalComponent={
          <PrimaryButton
            IconComponent={IconRefreshCwSvg}
            label="Clear"
            variant="custom"
            padding="0"
            customStyles={{
              iconColor: theme.appColors.primary_01,
              color: theme.appColors.primary_01,
            }}
            onClick={onClearAllOptions}
          />
        }
        CustomBackButton={
          <PrimaryButton
            IconComponent={IconChevronLeftSvg}
            variant="custom"
            padding="0"
            customStyles={{
              iconColor: theme.appColors.primary_02,
            }}
            onClick={onCloseFilterModal}
          />
        }
      />

      <S.OptionListWrapper>
        <S.Separator />
        {calendarFiltersOptions?.map((item) => (
          <FilterOptionList
            key={item.value}
            item={item}
            params={arrayParams}
            onClickFilterOption={onClickFilterOption}
          />
        ))}
      </S.OptionListWrapper>

      <S.Footer>
        <PrimaryButton
          label={`Show (${calendarFiltersCount})`}
          variant="outlined"
          padding="8px 40px"
          onClick={onCloseFilterModal}
          data-testid="FilterContentShowButton"
        />
      </S.Footer>
    </S.Root>
  );
};
