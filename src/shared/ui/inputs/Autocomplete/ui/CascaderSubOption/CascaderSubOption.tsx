import { useMemo } from 'react';

import { IconCheckSvg } from '@/shared/assets';

import { Checkbox } from '../../../Checkbox/Checkbox';
import * as S from './CascaderSubOption.styles';
import { CascaderSubValueProps } from './CascaderSubOption.types';

export const CascaderSubOption: React.FC<CascaderSubValueProps> = ({
  option,
  AdditionalElement,
  checkbox,
  activeOptions,
  onChangeSubOptions,
}) => {
  // * The option is selected if it is in the activeOptions array.
  const isSelected = useMemo(
    () => !!activeOptions.find((subOptionItem) => subOptionItem.value === option.value),
    [activeOptions, option.value],
  );

  const onClickSubOption = () => {
    onChangeSubOptions(option, isSelected);
  };

  return (
    <S.Root key={option.value} onClick={onClickSubOption}>
      <S.OptionCheck>
        {checkbox ? <Checkbox checked={isSelected} /> : <>{isSelected && <IconCheckSvg />}</>}
      </S.OptionCheck>

      {AdditionalElement && <AdditionalElement option={option} type="option" />}

      {option.label}
    </S.Root>
  );
};
