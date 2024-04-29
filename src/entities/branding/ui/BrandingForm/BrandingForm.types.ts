import { CSSIndents } from '@/shared/types/styles.types';

export type BrandingFormSchema = {
  name?: string;
  logo?: File | string;
  favicon?: File | string;
  anotherOne?: boolean;
};

type FieldsNames = keyof BrandingFormSchema;

export type BrandingFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: BrandingFormSchema;
  defaultFormData?: BrandingFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: BrandingFormSchema) => Promise<void> | void;
  setFormData?: (formData: BrandingFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
