import { CSSProperties } from 'react';

import { PrimarySelectableValue } from '@/shared/types/values.types';
import { FormDescriptionSection } from '@/shared/ui/forms';
import { FormDescriptionSectionSchema } from '@/shared/ui/forms/FormDescriptionSection';

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
  descriptions?: FormDescriptionSectionSchema[];
  medias?: FormDescriptionSectionSchema[];
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
  contentPaddings?: CSSProperties['padding'];
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
  $padding: CSSProperties['padding'];
};

export type StyledStaticFieldsProps = {
  $fieldsDirection: 'row' | 'column';
};
