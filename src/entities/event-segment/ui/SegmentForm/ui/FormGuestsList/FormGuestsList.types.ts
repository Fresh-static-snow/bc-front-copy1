import { Control, FieldValues } from 'react-hook-form';

export type FormGuestsListProps = {
  /**
   * The name of the input. Submitted with the form as part of a name/value pair.
   */
  name: string;
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  title: string;
  disabled?: boolean;
  fieldsDirection?: 'row' | 'column';
};

export type StyledElementProps = {
  $fieldsDirection: 'row' | 'column';
};
