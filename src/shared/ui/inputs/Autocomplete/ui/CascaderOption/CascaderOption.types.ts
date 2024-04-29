import {
  CascaderMixedValue,
  CascaderPrimaryValue,
  CascaderSubValue,
} from '@/shared/types/values.types';

import { AdditionalElementProps } from '../../types';

export type CascaderOptionProps = {
  /**
   * The props from `renderOption` provided by MUI Autocomplete.
   */
  props: React.HTMLAttributes<HTMLLIElement>;
  selected: boolean;
  AdditionalElement: React.FC<AdditionalElementProps>;
  option: CascaderPrimaryValue;
  /**
   * If `true`, the option will render like a checkbox.
   */
  checkbox?: boolean;
  /**
   * The current selected options and sub options.
   */
  activeOptions: CascaderMixedValue[];
  onChangeSubOptions: (subOption: CascaderSubValue, selected: boolean) => void;
};

export type StyledTooltipProps = {
  $elementsCount: number;
};
