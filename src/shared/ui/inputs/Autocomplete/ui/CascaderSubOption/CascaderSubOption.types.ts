import { CascaderMixedValue, CascaderSubValue } from '@/shared/types/values.types';

import { AdditionalElementProps } from '../../types';

export type CascaderSubValueProps = {
  option: CascaderSubValue;
  AdditionalElement: React.FC<AdditionalElementProps>;
  /**
   * If `true`, the option will render like a checkbox.
   */
  checkbox?: boolean;
  /**
   * The current selected options.
   */
  activeOptions: CascaderMixedValue[];
  onChangeSubOptions: (subOption: CascaderMixedValue, selected: boolean) => void;
};
