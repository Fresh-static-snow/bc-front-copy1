import dayjs from 'dayjs';
import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';

import { FormDescriptionListSchema, TournamentFormSchema } from './TournamentForm.types';

const selectSchema = Yup.object({
  label: Yup.string(),
  value: Yup.string(),
  additional: Yup.string().nullable(),
});

const formDescriptionsListSchema = Yup.array().of(
  Yup.object<FormDescriptionListSchema>({
    title: Yup.string().test({
      name: 'description-block-title',
      message: 'Both fields must be filled',
      test: (value, { parent }) => {
        const { description } = parent as FormDescriptionListSchema;
        if (value || description) {
          return !!value;
        }
        return true;
      },
    }),
    description: Yup.string().test({
      name: 'description-block-description',
      message: 'Both fields must be filled',
      test: (value, { parent }) => {
        const { title } = parent as FormDescriptionListSchema;
        if (value || title) {
          return !!value;
        }
        return true;
      },
    }),
  }),
);

export const tournamentSchema = Yup.object<TournamentFormSchema>({
  discipline: selectSchema.required('Discipline is a required field'),
  name: Yup.string().required('Name is a required field'),
  main_participant: selectSchema.nullable(),
  media_representative: selectSchema.nullable(),
  date: Yup.array()
    .of(
      Yup.string().test({
        name: 'valid-date',
        message: 'Invalid date',
        test: (value: string | null | undefined) => !value || dayjs(value).isValid(),
      }),
    )
    .required('Date is a required field'),
  region: selectSchema.nullable(),
  type: selectSchema.nullable(),
  tier: selectSchema.nullable(),
  sponsors: Yup.array().of(selectSchema).nullable(),
  owner: selectSchema.nullable(),
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
  descriptions: formDescriptionsListSchema.nullable(),
  medias: formDescriptionsListSchema.nullable(),
  visible: Yup.boolean(),
  anotherOne: Yup.boolean(),
});
