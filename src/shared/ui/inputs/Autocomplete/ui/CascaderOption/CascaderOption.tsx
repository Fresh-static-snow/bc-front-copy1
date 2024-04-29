import { useMemo } from 'react';

import { IconCheckSvg, IconChevronLeftSvg } from '@/shared/assets';
import { Counter } from '@/shared/ui/data-display/Counter/Counter';
import { Checkbox } from '@/shared/ui/inputs/Checkbox/Checkbox';
import { Rotate } from '@/shared/ui/layouts/Rotate/Rotate';
import { Scrollbar } from '@/shared/ui/layouts/Scrollbar/Scrollbar';

import { CascaderSubOption } from '../CascaderSubOption/CascaderSubOption';
import * as S from './CascaderOption.styles';
import { CascaderOptionProps } from './CascaderOption.types';

export const CascaderOption: React.FC<CascaderOptionProps> = ({
  props,
  selected,
  AdditionalElement,
  option,
  checkbox,
  activeOptions,
  onChangeSubOptions,
}) => {
  // * If `true`, the option has children.
  const isHaveChildren = useMemo(() => option?.children?.length > 0, [option?.children]);

  // * The number of selected sub options.
  const selectedCount = useMemo(
    () =>
      option?.children?.filter((optionItem) =>
        activeOptions.find((activeItem) => activeItem.value === optionItem.value),
      )?.length,
    [activeOptions, option?.children],
  );

  return (
    <S.Tooltip
      title={
        <Scrollbar>
          {option?.children?.map((subOptionItem) => (
            <CascaderSubOption
              key={subOptionItem.value + subOptionItem.label}
              option={subOptionItem}
              AdditionalElement={AdditionalElement}
              checkbox={checkbox}
              onChangeSubOptions={onChangeSubOptions}
              activeOptions={activeOptions}
            />
          ))}
        </Scrollbar>
      }
      disableFocusListener={!isHaveChildren}
      disableTouchListener={!isHaveChildren}
      disableHoverListener={!isHaveChildren}
      placement="right-start"
      $elementsCount={option?.children?.length}
    >
      <S.CascaderOption
        // * `props` is the `MenuItem` props from `useAutocomplete` hook.
        {...props}
      >
        <S.MainPart>
          <S.OptionCheck>
            {checkbox ? <Checkbox checked={selected} /> : <>{selected && <IconCheckSvg />}</>}
          </S.OptionCheck>

          {option.label}
        </S.MainPart>

        <S.SecondaryPart>
          {!!selectedCount && <Counter count={selectedCount} maxCount={0} />}

          <Rotate rotateDeg={180}>
            <IconChevronLeftSvg />
          </Rotate>
        </S.SecondaryPart>
      </S.CascaderOption>
    </S.Tooltip>
  );
};
