import { CSSProperties } from 'react';

import { PrimarySelectableValue } from '@/shared/types/values.types';
import { FormDescriptionSectionSchema } from '@/shared/ui/forms/FormDescriptionSection';

export type FormGuestsListSchema = {
  id?: string;
  elemId?: string;
  removed?: boolean;
  name?: string;
  username?: string;
  social?: string;
};

export type FormLanguageListSchema = {
  id?: string;
  elemId?: string;
  removed?: boolean;
  language?: PrimarySelectableValue;
  commentators?: PrimarySelectableValue[];
  backup_commentators?: PrimarySelectableValue[];
  analytics?: PrimarySelectableValue[];
  host_analytic?: PrimarySelectableValue;
  studio?: PrimarySelectableValue;
  studio_analytics?: PrimarySelectableValue;
  setup?: PrimarySelectableValue;
  channels?: PrimarySelectableValue[];
  stream?: PrimarySelectableValue;
  staff?: PrimarySelectableValue[];
};

export type SegmentFormSchema = {
  discipline?: PrimarySelectableValue;
  tournament?: PrimarySelectableValue;
  date?: string;
  time?: [string, string];
  format?: PrimarySelectableValue;
  title?: string;
  cover?: File | string;
  logo?: File | string;
  guests?: FormGuestsListSchema[];
  descriptions?: FormDescriptionSectionSchema[];
  medias?: FormDescriptionSectionSchema[];
  languages?: FormLanguageListSchema[];
  visible?: boolean;
  anotherOne?: boolean;
};

type FieldsNames = keyof SegmentFormSchema;

export type SegmentFormProps = {
  disciplineOptions: PrimarySelectableValue[];
  tournamentOptions: PrimarySelectableValue[];
  formatsOptions: PrimarySelectableValue[];
  languagesOptions: PrimarySelectableValue[];
  studiosOptions: PrimarySelectableValue[];
  studiosAnalyticsOptions: PrimarySelectableValue[];
  setupsOptions: PrimarySelectableValue[];
  channelsOptions: PrimarySelectableValue[];
  commentatorsOptions: PrimarySelectableValue[];
  analyticsOptions: PrimarySelectableValue[];
  staffOptions: PrimarySelectableValue[];
  streamsOptions: PrimarySelectableValue[];

  FooterCustomComponent?: React.ReactNode;
  contentPaddings?: CSSProperties['padding'];
  /**
   * @default 'row'
   */
  fieldsDirection?: 'row' | 'column';
  footerType?: 'primary' | 'secondary';
  formData?: SegmentFormSchema;
  defaultFormData?: SegmentFormSchema;
  disabledFields?: FieldsNames[];
  hiddenFields?: FieldsNames[];
  withDelete?: boolean;
  /**
   * @default 'Submit'
   */
  submitButtonLabel?: string;
  isLoading?: boolean;
  isDirty?: boolean;
  onSendData: (data: SegmentFormSchema) => Promise<void> | void;
  setFormData?: (formData: SegmentFormSchema) => void;
  onCloseModal?: () => void;
  onClickDelete?: () => void;
  onClickReset?: () => void;
};

export type StyledContentProps = {
  $padding: CSSProperties['padding'];
};

export type StyledStaticFieldsProps = {
  $fieldsDirection: 'row' | 'column';
};
