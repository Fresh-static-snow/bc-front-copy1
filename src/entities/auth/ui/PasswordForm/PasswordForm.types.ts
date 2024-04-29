import { CSSIndents } from '@/shared/types/styles.types';

export type PasswordFormSchema = {
  password?: string;
  passwordConfirm?: string;
};

export type PasswordFormProps = {
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  isLoading?: boolean;
  onSendData: (data: PasswordFormSchema) => Promise<void> | void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
