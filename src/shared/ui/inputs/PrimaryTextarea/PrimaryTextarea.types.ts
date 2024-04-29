import { Control, FieldValues } from 'react-hook-form';

export type PrimaryTextareaProps = {
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  /**
   * Name of the input. Submitted with the form as part of a name/value pair.
   */
  name: string;
  placeholder?: string;
  disabled?: boolean;
};

export type StyledTextareaProps = {
  $error: boolean;
};
