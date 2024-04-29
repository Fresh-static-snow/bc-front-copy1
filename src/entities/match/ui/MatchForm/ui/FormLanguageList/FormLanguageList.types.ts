import { Control, FieldValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { MatchFormSchema } from '../../MatchForm.types';

export type FormLanguageListProps = {
  /**
   * This object contains methods for registering components into React Hook Form.
   */
  control: Control<FieldValues>;
  watch: UseFormWatch<MatchFormSchema>;
  setValue: UseFormSetValue<MatchFormSchema>;
  disabled?: boolean;
  fieldsDirection?: 'row' | 'column';
  languageOptions: PrimarySelectableValue[];
  studioOptions: PrimarySelectableValue[];
  studioAnalyticsOptions: PrimarySelectableValue[];
  channelsOptions: PrimarySelectableValue[];
  commentatorsOptions: PrimarySelectableValue[];
  analyticsOptions: PrimarySelectableValue[];
  staffOptions: PrimarySelectableValue[];
};

export type StyledElementProps = {
  $fieldsDirection: 'row' | 'column';
};
