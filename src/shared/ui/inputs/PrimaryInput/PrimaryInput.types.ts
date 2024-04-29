import { Control, FieldValues } from 'react-hook-form';

export type PrimaryInputProps = {
  /**
   * If `password`, shows `*` instead of typed letters.
   * @default 'text'
   */
  type?: 'text' | 'password';
  /**
   * SVG element placed before the children.
   */
  IconComponent?: React.FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  /**
   * Name of the input. Submitted with the form as part of a name/value pair.
   */
  name: string;
  /**
   * Text that appears in the input when it has no value set.
   */
  placeholder?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
};

export type StyledInputProps = {
  $error: boolean;
  $withIcon: boolean;
};
