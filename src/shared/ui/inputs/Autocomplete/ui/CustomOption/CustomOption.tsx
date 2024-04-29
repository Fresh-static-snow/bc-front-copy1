import { IconCheckSvg } from '@/shared/assets';

import { Checkbox } from '../../../Checkbox/Checkbox';
import * as S from './CustomOption.styles';
import { CustomOptionProps } from './CustomOption.types';

/**
 * The component that renders the custom `Option` in the Autocomplete component.
 */
export const CustomOption: React.FC<CustomOptionProps> = ({
  props,
  selected,
  AdditionalElement,
  option,
  checkbox,
}) => (
  <S.Root
    // * `props` is the `MenuItem` props from `useAutocomplete` hook.
    {...props}
    aria-invalid={option?.status}
  >
    <S.OptionCheck>
      {checkbox ? <Checkbox checked={selected} /> : <>{selected && <IconCheckSvg />}</>}
    </S.OptionCheck>

    {AdditionalElement && <AdditionalElement option={option} type="option" />}

    {option.label}
  </S.Root>
);
