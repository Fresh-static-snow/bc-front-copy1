import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';

import { BrandingFormSchema } from './BrandingForm.types';

export const brandingFormSchema = Yup.object<BrandingFormSchema>({
  name: Yup.string().required('Name is required'),
  logo: Yup.mixed()
    .required('Logo is a required field')
    .test({
      name: 'type-check',
      message: 'Please provide a supported file types .jpeg, .jpg, .png, .svg',
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
  favicon: Yup.mixed()
    .nullable()
    .test({
      name: 'type-check',
      message: 'Please provide a supported file types .jpeg, .jpg, .png, .svg',
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
  anotherOne: Yup.boolean(),
});
