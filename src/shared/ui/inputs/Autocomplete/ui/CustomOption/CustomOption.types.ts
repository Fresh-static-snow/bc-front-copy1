import { PrimarySelectableValue } from '@/shared/types/values.types';

import { AdditionalElementProps } from '../../types';

export type CustomOptionProps = {
  /**
   * The props from `renderOption` provided by MUI Autocomplete.
   */
  props: React.HTMLAttributes<HTMLLIElement>;
  selected: boolean;
  AdditionalElement?: React.FC<AdditionalElementProps>;
  option: PrimarySelectableValue;
  /**
   * If `true`, the option will render like a checkbox.
   */
  checkbox?: boolean;
};

export type StyledRootProps = {
  'aria-invalid': boolean;
};
