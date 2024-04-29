import { CSSIndents } from '@/shared/types/styles.types';

export type UserCompanyFormSchema = {
  companyName?: string;
  cover?: File | string;
  anotherOne?: boolean;
};

type FieldsNames = keyof UserCompanyFormSchema;

export type UserCompanyFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
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
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
