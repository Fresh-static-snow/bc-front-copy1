import { CSSIndents } from '@/shared/types/styles.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

export type FormDescriptionListSchema = {
  id?: string;
  elemId?: string;
  removed?: boolean;
  title?: string;
  description?: string;
};

export type TournamentFormSchema = {
  discipline?: PrimarySelectableValue;
  name?: string;
  main_participant?: PrimarySelectableValue;
  media_representative?: PrimarySelectableValue;
  date?: string[];
  region?: PrimarySelectableValue;
  type?: PrimarySelectableValue;
  tier?: PrimarySelectableValue;
  sponsors?: PrimarySelectableValue[];
  owner?: PrimarySelectableValue;
  cover?: File | string;
  descriptions?: FormDescriptionListSchema[];
  medias?: FormDescriptionListSchema[];
  visible?: boolean;
  anotherOne?: boolean;
};

type FieldsNames = keyof TournamentFormSchema;

export type TournamentFormProps = {
  disciplineOptions: PrimarySelectableValue[];
  mainParticipantsOptions: PrimarySelectableValue[];
  mediaRepresentativeOptions: PrimarySelectableValue[];
  regionsOptions: PrimarySelectableValue[];
  typesOptions: PrimarySelectableValue[];
  sponsorsOptions: PrimarySelectableValue[];
  ownersOptions: PrimarySelectableValue[];

  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSIndents;
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: TournamentFormSchema;
  defaultFormData?: TournamentFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: TournamentFormSchema) => Promise<void> | void;
  setFormData?: (formData: TournamentFormSchema) => void;
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
