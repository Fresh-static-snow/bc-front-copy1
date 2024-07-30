import { CSSProperties } from 'react';

export type ChangePasswordFormSchema = {
  oldPassword?: string;
  newPassword?: string;
  newPasswordRepeated?: string;
};

export type ChangePasswordFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
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
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
