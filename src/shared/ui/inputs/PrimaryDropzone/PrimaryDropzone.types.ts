import { Control, FieldValues } from 'react-hook-form';

export type FileTypes = 'jpg' | 'png' | 'gif' | 'svg' | 'pdf' | 'txt';

export type PrimaryDropzoneProps = {
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  /**
   * Name of the input. Submitted with the form as part of a name/value pair.
   */
  name: string;
  /**
   * Possible file types.
   * @example ['png', 'jpg']
   */
  types: FileTypes[];
  disabled?: boolean;
};

export type StyledDropzoneProps = {
  $error: boolean;
  $isDragActive: boolean;
  $isFocused: boolean;
  $hidden: boolean;
};

export type StyledFilePreviewProps = {
  $error: boolean;
};
