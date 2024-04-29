import { PrimarySelectableValue } from '@/shared/types/values.types';

import { AdditionalElementProps } from '../../types';

export type SingleStartAdornmentProps = {
  AdditionalElement: React.FC<AdditionalElementProps>;
  option: PrimarySelectableValue;
};
