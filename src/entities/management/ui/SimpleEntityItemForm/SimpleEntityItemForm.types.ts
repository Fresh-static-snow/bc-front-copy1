import { CSSIndents } from '@/shared/types/styles.types';

export type SimpleEntityItemFormSchema = {
  name?: string;
  anotherOne?: boolean;
};

type FieldsNames = keyof SimpleEntityItemFormSchema;

export type SimpleEntityItemFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: SimpleEntityItemFormSchema;
  defaultFormData?: SimpleEntityItemFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: SimpleEntityItemFormSchema) => Promise<void> | void;
  setFormData?: (formData: SimpleEntityItemFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
