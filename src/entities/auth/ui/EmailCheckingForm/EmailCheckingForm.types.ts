import { CSSProperties } from 'react';

export type EmailCheckingFormSchema = {
  email?: string;
};

export type EmailCheckingFormProps = {
  additionalLinkText?: string;
  additionalLinkPath?: string;

  contentPaddings?: CSSProperties['padding'];
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  isLoading?: boolean;
  onSendData: (data: EmailCheckingFormSchema) => Promise<void> | void;
};

export type StyledContentProps = {
  $padding: CSSProperties['padding'];
};
