import { CSSProperties } from 'react';

import { PrimarySelectableValue } from '@/shared/types/values.types';

export type TeamFormSchema = {
  discipline?: PrimarySelectableValue;
  name?: string;
  anotherOne?: boolean;
};

type FieldsNames = keyof TeamFormSchema;

export type TeamFormProps = {
  disciplineOptions: PrimarySelectableValue[];

  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: TeamFormSchema;
  defaultFormData?: TeamFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: TeamFormSchema) => Promise<void> | void;
  setFormData?: (formData: TeamFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSProperties['padding'];
  $fieldsDirection: 'row' | 'column';
};
