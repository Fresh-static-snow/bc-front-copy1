import { CSSProperties } from 'react';

export type SimpleEntityItemFormSchema = {
  name?: string;
  anotherOne?: boolean;
};

type FieldsNames = keyof SimpleEntityItemFormSchema;

export type SimpleEntityItemFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
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
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
