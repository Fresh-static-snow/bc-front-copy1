import { CSSIndents } from '@/shared/types/styles.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

export type FormLanguageListSchema = {
  id?: string;
  elemId?: string;
  removed?: boolean;
  language?: PrimarySelectableValue;
  studio?: PrimarySelectableValue;
  studio_analytics?: PrimarySelectableValue;
  channels?: PrimarySelectableValue[];
  commentators?: PrimarySelectableValue[];
  backup_commentator?: PrimarySelectableValue;
  analytics?: PrimarySelectableValue[];
  host_analytic?: PrimarySelectableValue;
  staff?: PrimarySelectableValue[];
};

export type MatchFormSchema = {
  discipline?: PrimarySelectableValue;
  tournament?: PrimarySelectableValue;
  date?: string;
  time?: [string, string];
  format?: PrimarySelectableValue;
  teams?: PrimarySelectableValue[];
  languages?: FormLanguageListSchema[];
  visible?: boolean;
  anotherOne?: boolean;
};

type FieldsNames = keyof MatchFormSchema;

export type MatchFormProps = {
  disciplineOptions: PrimarySelectableValue[];
  tournamentOptions: PrimarySelectableValue[];
  formatsOptions: PrimarySelectableValue[];
  teamsOptions: PrimarySelectableValue[];
  languagesOptions: PrimarySelectableValue[];
  studiosOptions: PrimarySelectableValue[];
  studiosAnalyticsOptions: PrimarySelectableValue[];
  channelsOptions: PrimarySelectableValue[];
  commentatorsOptions: PrimarySelectableValue[];
  analyticsOptions: PrimarySelectableValue[];
  staffOptions: PrimarySelectableValue[];

  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: MatchFormSchema;
  defaultFormData?: MatchFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: MatchFormSchema) => Promise<void> | void;
  setFormData?: (formData: MatchFormSchema) => void;
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
