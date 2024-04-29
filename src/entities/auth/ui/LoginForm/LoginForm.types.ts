import { CSSIndents } from '@/shared/types/styles.types';

export type LoginFormSchema = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

type FieldsNames = keyof LoginFormSchema;

export type LoginFormProps = {
  additionalLinkText?: string;
  additionalLinkPath?: string;

  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  isLoading?: boolean;
  onSendData: (data: LoginFormSchema) => Promise<void> | void;
};

export type StyledContentProps = {
  $padding: CSSIndents;
};

export type StyledStaticFieldsProps = {
  $fieldsDirection: 'row' | 'column';
};
