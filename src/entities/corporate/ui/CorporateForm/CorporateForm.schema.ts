import dayjs from 'dayjs';
import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';

import { CorporateFormSchema } from './CorporateForm.types';

const selectSchema = Yup.object({
  label: Yup.string(),
  value: Yup.string(),
  additional: Yup.string().nullable(),
});

const cascaderSchema = selectSchema.concat(
  Yup.object({
    parent: Yup.string(),
    children: Yup.array().of(
      selectSchema.concat(
        Yup.object({
          parent: Yup.string(),
        }),
      ),
    ),
  }),
);

export const corporateSchema = Yup.object<CorporateFormSchema>({
  name: Yup.string().required('Name is a required field'),
  location: Yup.string().nullable(),
  cover: Yup.mixed()
    .nullable()
    .test({
      name: 'type-check',
      message: 'Please provide a supported file types .jpeg, .jpg, .png',
      test: (file: File | string | null | undefined) =>
        !file ||
        typeof file === 'string' ||
        ['png', 'jpeg', 'jpg'].includes(getFileExtension(file?.name)),
    })
    .test({
      name: 'size-check',
      message: 'Please provide a file smaller than 60MB',
      test: (file: File | string | null | undefined) =>
        !file || typeof file === 'string' || file?.size < 60 * 1000 * 1024,
    }),
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
  description: Yup.string().nullable(),
  participants: Yup.array().of(cascaderSchema).nullable(),
  main_participant: selectSchema.nullable(),
  visible: Yup.boolean(),
  anotherOne: Yup.boolean(),
});
