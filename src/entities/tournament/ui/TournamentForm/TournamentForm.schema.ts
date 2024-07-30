import dayjs from 'dayjs';
import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';
import { FormDescriptionSection } from '@/shared/ui/forms';

import { TournamentFormSchema } from './TournamentForm.types';

const selectSchema = Yup.object({
  label: Yup.string(),
  value: Yup.string(),
  additional: Yup.string().nullable(),
});

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
  descriptions: FormDescriptionSection.schema.nullable(),
  medias: FormDescriptionSection.schema.nullable(),
  visible: Yup.boolean(),
  anotherOne: Yup.boolean(),
});
