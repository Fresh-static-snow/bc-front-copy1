import { CSSColor } from '@/shared/types/styles.types';
import { CascaderMixedValue, PrimarySelectableValue } from '@/shared/types/values.types';

export type AdditionalElementProps = {
  /**
   * The type indicates in which part of the component the additional element is used.
   * This can be useful when customizing the styles or functionality of the passed component.
   */
  type?: 'option' | 'input' | 'chip';
  option: PrimarySelectableValue;
};

export type OptionWithAutocompleteProps = CascaderMixedValue & {
  /**
   * The props from getTagProps provided by MUI Autocomplete.
   */
  props: {
    key: number;
    className: string;
    disabled: boolean;
    'data-tag-index': number;
    tabIndex: -1;
    onDelete: (event: any) => void;
  };
};

export type StyledAutocompleteProps = {
  $error: boolean;
  $disablePopupIconRotation: boolean;
  $popupIconColor: CSSColor;
};

export type OptionWithInputValue = PrimarySelectableValue & {
  inputValue?: string;
};
