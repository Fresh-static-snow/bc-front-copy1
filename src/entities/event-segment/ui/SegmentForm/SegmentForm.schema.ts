import dayjs from 'dayjs';
import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';
import { FormDescriptionSection } from '@/shared/ui/forms';

import { FormLanguageListSchema, SegmentFormSchema } from './SegmentForm.types';

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
          commentators,
          backup_commentators,
          analytics,
          host_analytic,
          studio,
          studio_analytics,
          setup,
          channels,
          stream,
          staff,
        } = parent as FormLanguageListSchema;
        if (
          !language &&
          (commentators?.length > 0 ||
            backup_commentators?.length > 0 ||
            analytics?.length > 0 ||
            host_analytic ||
            studio ||
            studio_analytics ||
            setup ||
            channels?.length > 0 ||
            stream ||
            staff?.length > 0)
        ) {
          return false;
        }
        return true;
      },
    }),
    commentators: Yup.array().of(selectSchema).nullable(),
    backup_commentators: Yup.array().of(selectSchema).nullable(),
    analytics: Yup.array().of(selectSchema).nullable(),
    host_analytic: selectSchema.nullable(),
    studio: selectSchema.nullable(),
    studio_analytics: selectSchema.nullable(),
    setup: selectSchema.nullable(),
    channels: Yup.array().of(selectSchema).nullable(),
    stream: selectSchema.nullable(),
    staff: Yup.array().of(selectSchema).nullable(),
  }),
);

export const segmentSchema = Yup.object<SegmentFormSchema>({
  discipline: selectSchema.required('Discipline is a required field'),
  tournament: selectSchema.required('Event is a required field'),
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
  title: Yup.string().nullable(),
  cover: Yup.mixed()
    .required('Cover is a required field')
    .test({
      name: 'type-check',
      message: 'Please provide a supported file types .jpeg, .jpg, .png',
      test: (file: File | string | null | undefined) =>
        !file ||
        typeof file === 'string' ||
        ['png', 'jpeg', 'jpg', 'svg'].includes(getFileExtension(file?.name)),
    })
    .test({
      name: 'size-check',
      message: 'Please provide a file smaller than 60MB',
      test: (file: File | string | null | undefined) =>
        !file || typeof file === 'string' || file?.size < 60 * 1000 * 1024,
    }),
  logo: Yup.mixed()
    .nullable()
    .test({
      name: 'type-check',
      message: 'Please provide a supported file types .jpeg, .jpg, .png',
      test: (file: File | string | null | undefined) =>
        !file ||
        typeof file === 'string' ||
        ['png', 'jpeg', 'jpg', 'svg'].includes(getFileExtension(file?.name)),
    })
    .test({
      name: 'size-check',
      message: 'Please provide a file smaller than 60MB',
      test: (file: File | string | null | undefined) =>
        !file || typeof file === 'string' || file?.size < 60 * 1000 * 1024,
    }),
  descriptions: FormDescriptionSection.schema.nullable(),
  medias: FormDescriptionSection.schema.nullable(),
  languages: formLanguagesListSchema.nullable(),
  visible: Yup.boolean(),
  anotherOne: Yup.boolean(),
});
