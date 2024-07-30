import { CSSProperties } from 'react';

export type UserCompanyFormSchema = {
  companyName?: string;
  cover?: File | string;
  anotherOne?: boolean;
};

type FieldsNames = keyof UserCompanyFormSchema;

export type UserCompanyFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: UserCompanyFormSchema;
  defaultFormData?: UserCompanyFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: UserCompanyFormSchema) => Promise<void> | void;
  setFormData?: (formData: UserCompanyFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
