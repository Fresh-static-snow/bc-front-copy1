import { CSSIndents } from '@/shared/types/styles.types';

export type FormPermissionListSchema = {
  id?: string;
  elemId?: string;
  checked?: boolean;
  title?: string;
  description?: string;
};

export type RoleFormSchema = {
  name?: string;
  description?: string;
  permissions?: FormPermissionListSchema[];
  anotherOne?: boolean;
};

type FieldsNames = keyof RoleFormSchema;

export type RoleFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: RoleFormSchema;
  defaultFormData?: RoleFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: RoleFormSchema) => Promise<void> | void;
  setFormData?: (formData: RoleFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
};

export type StyledStaticFieldsProps = {
  $fieldsDirection: 'row' | 'column';
};
