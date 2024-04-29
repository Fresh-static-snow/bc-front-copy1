import { AutocompleteRenderInputParams } from '@mui/material';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { AdditionalElementProps } from '../../types';

export type CustomTextFieldProps = {
  /**
   * The params from renderInput provided by MUI Autocomplete.
   */
  params: AutocompleteRenderInputParams;
  placeholder: string;
  AdditionalElement?: React.FC<AdditionalElementProps>;
  option?: PrimarySelectableValue;
  isLoading?: boolean;
};
