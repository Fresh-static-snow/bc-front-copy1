import { Control, FieldValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { MatchFormSchema } from '../../MatchForm.types';

export type FormLanguageListProps = {
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  name: keyof MatchFormSchema;
  watch: UseFormWatch<MatchFormSchema>;
  setValue: UseFormSetValue<MatchFormSchema>;
  disabled?: boolean;
  fieldsDirection?: 'row' | 'column';
  languageOptions: PrimarySelectableValue[];
  studioOptions: PrimarySelectableValue[];
  studioAnalyticsOptions: PrimarySelectableValue[];
  setupOptions: PrimarySelectableValue[];
  channelsOptions: PrimarySelectableValue[];
  commentatorsOptions: PrimarySelectableValue[];
  analyticsOptions: PrimarySelectableValue[];
  staffOptions: PrimarySelectableValue[];
  streamsOptions: PrimarySelectableValue[];
};

export type CopiedTalents = {
  commentators: PrimarySelectableValue[];
  backup_commentators: PrimarySelectableValue[];
  analytics: PrimarySelectableValue[];
  host_analytic: PrimarySelectableValue;
};

export type CopiedStaff = {
  studio: PrimarySelectableValue;
  studio_analytics: PrimarySelectableValue;
  setup: PrimarySelectableValue;
  channels: PrimarySelectableValue[];
  stream: PrimarySelectableValue;
  staff: PrimarySelectableValue[];
};

export type StyledElementProps = {
  $fieldsDirection: 'row' | 'column';
};
