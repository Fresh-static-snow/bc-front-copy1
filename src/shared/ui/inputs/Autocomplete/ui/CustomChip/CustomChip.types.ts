import { AdditionalElementProps, OptionWithAutocompleteProps } from '../../types';

export type CustomChipProps = {
  AdditionalElement: React.FC<AdditionalElementProps>;
  option: OptionWithAutocompleteProps;
};

export type StyledRootProps = {
  $invalid: boolean;
};
