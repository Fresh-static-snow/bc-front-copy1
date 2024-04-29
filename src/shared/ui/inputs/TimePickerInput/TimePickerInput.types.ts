import { CSSProperties } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export type TimePickerInputProps = {
  width?: CSSProperties['width'];
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  /**
   * Name of the input. Submitted with the form as part of a name/value pair.
   */
  name: string;
  disabled?: boolean;
};

export type StyledInputComponentProps = {
  $disabled: boolean;
};
