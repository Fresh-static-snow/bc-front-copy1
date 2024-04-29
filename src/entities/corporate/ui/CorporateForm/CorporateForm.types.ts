import { CSSIndents } from '@/shared/types/styles.types';
import {
  CascaderMixedValue,
  CascaderPrimaryValue,
  PrimarySelectableValue,
} from '@/shared/types/values.types';

export type CorporateFormSchema = {
  name?: string;
  location?: string;
  cover?: File | string;
  date?: string;
  time?: [string, string];
  description?: string;
  participants?: CascaderMixedValue[];
  main_participant?: PrimarySelectableValue;
  visible?: boolean;
  anotherOne?: boolean;
};

type FieldsNames = keyof CorporateFormSchema;

export type CorporateFormProps = {
  participantsOptions: CascaderPrimaryValue[];
  mainParticipantsOptions: CascaderPrimaryValue[];

  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: CorporateFormSchema;
  defaultFormData?: CorporateFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: CorporateFormSchema) => Promise<void> | void;
  setFormData?: (formData: CorporateFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
