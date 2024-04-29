import { CSSIndents } from '@/shared/types/styles.types';

export type ChangePasswordFormSchema = {
  oldPassword?: string;
  newPassword?: string;
  newPasswordRepeated?: string;
};

export type ChangePasswordFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: ChangePasswordFormSchema) => Promise<void> | void;
  onCloseModal?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
