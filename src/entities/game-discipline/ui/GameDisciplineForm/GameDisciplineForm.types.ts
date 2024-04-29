import { CSSIndents } from '@/shared/types/styles.types';

export type GameDisciplineFormSchema = {
  name?: string;
  logo?: File | string;
  anotherOne?: boolean;
};

type FieldsNames = keyof GameDisciplineFormSchema;

export type GameDisciplineFormProps = {
  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: GameDisciplineFormSchema;
  defaultFormData?: GameDisciplineFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: GameDisciplineFormSchema) => Promise<void> | void;
  setFormData?: (formData: GameDisciplineFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
  $fieldsDirection: 'row' | 'column';
};
