import { CSSIndents } from '@/shared/types/styles.types';

export type EmailCheckingFormSchema = {
  email?: string;
};

export type EmailCheckingFormProps = {
  additionalLinkText?: string;
  additionalLinkPath?: string;

  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  isLoading?: boolean;
  onSendData: (data: EmailCheckingFormSchema) => Promise<void> | void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
};
