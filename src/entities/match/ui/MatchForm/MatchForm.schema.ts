import dayjs from 'dayjs';
import * as Yup from 'yup';

import { FormLanguageListSchema, MatchFormSchema } from './MatchForm.types';

const selectSchema = Yup.object({
  label: Yup.string(),
  value: Yup.string(),
  additional: Yup.string().nullable(),
});

const formLanguagesListSchema = Yup.array().of(
  Yup.object<FormLanguageListSchema>().shape({
    language: selectSchema.nullable().test({
      name: 'language-block-language',
      message: 'Language is a required field for language block',
      test: (value, { parent }) => {
        const {
          language,
          studio,
          studio_analytics,
          channels,
          commentators,
          analytics,
          staff,
          host_analytic,
          backup_commentator,
        } = parent as FormLanguageListSchema;
        if (
          !language &&
          (studio ||
            studio_analytics ||
            host_analytic ||
            backup_commentator ||
            channels?.length > 0 ||
            commentators?.length > 0 ||
            analytics?.length > 0 ||
            staff?.length > 0)
        ) {
          return false;
        }
        return true;
      },
    }),
    studio: selectSchema.nullable(),
    studio_analytics: selectSchema.nullable(),
    channels: Yup.array().of(selectSchema).nullable(),
    commentators: Yup.array().of(selectSchema).nullable(),
    backup_commentator: selectSchema.nullable(),
    analytics: Yup.array().of(selectSchema).nullable(),
    host_analytic: selectSchema.nullable(),
    staff: Yup.array().of(selectSchema).nullable(),
  }),
);

export const matchSchema = Yup.object<MatchFormSchema>({
  discipline: selectSchema.required('Discipline is a required field'),
  tournament: selectSchema.required('Tournament is a required field'),
  date: Yup.string()
    .required('Date is a required field')
    .test({
      name: 'valid-date',
      message: 'Invalid date',
      test: (value: string | null | undefined) => !value || dayjs(value).isValid(),
    }),
  time: Yup.array()
    .of(Yup.string())
    .test({
      name: 'valid-time',
      message: 'Time is a required field',
      test: (value) => value && value.length > 0 && typeof value[0] === 'string',
    }),
  format: selectSchema.nullable(),
  teams: Yup.array()
    .of(selectSchema)
    .nullable()
    .test({
      name: 'team-length',
      message: 'You can select a maximum of two teams',
      test: (value) => value && value.length <= 2,
    }),
  languages: formLanguagesListSchema.nullable(),
  visible: Yup.boolean(),
  anotherOne: Yup.boolean(),
});
