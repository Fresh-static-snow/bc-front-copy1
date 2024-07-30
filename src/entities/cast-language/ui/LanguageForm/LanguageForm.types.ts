import { CSSProperties } from 'react';

export type LanguageFormSchema = {
  name?: string;
  keyword?: string;
  anotherOne?: boolean;
};

type FieldsNames = keyof LanguageFormSchema;

export type LanguageFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: LanguageFormSchema;
  defaultFormData?: LanguageFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: LanguageFormSchema) => Promise<void> | void;
  setFormData?: (formData: LanguageFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
