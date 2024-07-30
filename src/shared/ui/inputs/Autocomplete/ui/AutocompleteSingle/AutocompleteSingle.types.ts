import { CSSProperties } from 'react';
import { Control, FieldValues } from 'react-hook-form';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { AdditionalElementProps } from '../../types';

export type AutocompleteSingleProps = {
  options: PrimarySelectableValue[];
  /**
   * Name of the input. Submitted with the form as part of a name/value pair.
   */
  name: string;
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  disabled?: boolean;
  placeholder?: string;
  /**
   * Additional element to display in the different parts of the component. For example, the user avatar in the option value.
   */
  AdditionalElement?: React.FC<AdditionalElementProps>;
  /**
   * The icon to display in place of the default popup icon.
   * @default <PopupIcon />
   */
  CustomPopupIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  /**
   * The color of the popup icon.
   * @default primary_02
   * @description `primary_02` is the color of the active theme.
   */
  popupIconColor?: CSSProperties['color'];
  /**
   * If `true`, options will be displayed with checkboxes.
   * @default false
   */
  optionCheckbox?: boolean;
  /**
   * If `true`, the popup icon will not rotate when the popup is opened.
   * @default false
   */
  disablePopupIconRotation?: boolean;
  /**
   * If `true`, creation of new options will be allowed. New options will be with `new_created_option` value.
   * @default false
   */
  withOptionCreation?: boolean;
};
