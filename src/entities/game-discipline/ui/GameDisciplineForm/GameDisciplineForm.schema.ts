import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';

import { GameDisciplineFormSchema } from './GameDisciplineForm.types';

export const gameDisciplineSchema = Yup.object<GameDisciplineFormSchema>({
  name: Yup.string().required('Name is a required field'),
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
  visible: Yup.boolean(),
  anotherOne: Yup.boolean(),
});
