import { useMemo } from 'react';

import { Accordion } from '@/shared/ui/data-display';

import { FilterOption } from '../FilterOption/FilterOption';
import * as S from './FilterOptionList.styles';
import { FilterOptionListProps } from './FilterOptionList.types';

export const FilterOptionList: React.FC<FilterOptionListProps> = ({
  item,
  params,
  onClickFilterOption,
}) => {
  const defaultExpandedStatus = useMemo(
    () => item.children?.some(({ value, parent }) => params[parent]?.includes(value)),
    [item.children, params],
  );

  return (
    <Accordion summaryLabel={item.label} defaultExpandedStatus={defaultExpandedStatus}>
      <S.AccordionContent>
        {item.children?.map(({ label: childLabel, value: childValue, parent }) => (
          <FilterOption
            key={childValue + parent}
            label={childLabel}
            value={childValue}
            params={params}
            parent={parent}
            onClickFilterOption={onClickFilterOption}
          />
        ))}
      </S.AccordionContent>
    </Accordion>
  );
};
