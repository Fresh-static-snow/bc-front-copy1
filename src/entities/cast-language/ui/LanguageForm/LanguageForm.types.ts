import { CSSIndents } from '@/shared/types/styles.types';

export type LanguageFormSchema = {
  name?: string;
  keyword?: string;
  anotherOne?: boolean;
};

type FieldsNames = keyof LanguageFormSchema;

export type LanguageFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
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
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
