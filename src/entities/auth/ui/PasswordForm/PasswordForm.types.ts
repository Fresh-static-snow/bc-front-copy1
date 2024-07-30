import { CSSProperties } from 'react';

export type PasswordFormSchema = {
  password?: string;
  passwordConfirm?: string;
};

export type PasswordFormProps = {
  contentPaddings?: CSSProperties['padding'];
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  isLoading?: boolean;
  onSendData: (data: PasswordFormSchema) => Promise<void> | void;
};

export type StyledContentProps = {
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
