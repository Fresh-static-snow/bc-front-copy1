import { CSSIndents } from '@/shared/types/styles.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

export type UserFormSchema = {
  username?: string;
  firstName?: string;
  lastName?: string;
  avatar?: File | string;
  email?: string;
  company?: PrimarySelectableValue;
  disciplines?: PrimarySelectableValue[];
  role?: PrimarySelectableValue;
  googleCalendar?: boolean;
  anotherOne?: boolean;
};

type FieldsNames = keyof UserFormSchema;

export type UserFormProps = {
  userDisciplineOptions?: PrimarySelectableValue[];
  companyOptions?: PrimarySelectableValue[];
  roleOptions?: PrimarySelectableValue[];

  withGoogleCalendarRefresh?: boolean;

  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: UserFormSchema;
  defaultFormData?: UserFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: UserFormSchema) => Promise<void> | void;
  setFormData?: (formData: UserFormSchema) => void;
  onClickDelete?: () => void;
  onCloseModal?: () => void;
  onClickReset?: () => void;
  onRefreshGoogleCalendar?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
