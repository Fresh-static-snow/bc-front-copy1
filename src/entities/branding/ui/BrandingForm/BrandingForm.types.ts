import { CSSProperties } from 'react';

export type BrandingFormSchema = {
  name?: string;
  logo?: File | string;
  favicon?: File | string;
  anotherOne?: boolean;
};

type FieldsNames = keyof BrandingFormSchema;

export type BrandingFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
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
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
