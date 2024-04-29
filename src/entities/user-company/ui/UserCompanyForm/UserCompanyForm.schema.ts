import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';

import { UserCompanyFormSchema } from './UserCompanyForm.types';

export const companySchema = Yup.object<UserCompanyFormSchema>({
  companyName: Yup.string().required('Company name is required'),
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
});
