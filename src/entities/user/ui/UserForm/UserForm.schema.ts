import * as Yup from 'yup';

import { getFileExtension } from '@/shared/lib';

import { UserFormSchema } from './UserForm.types';

const selectSchema = Yup.object({
  label: Yup.string(),
  value: Yup.string(),
  additional: Yup.string().nullable(),
});

export const userSchema = Yup.object<UserFormSchema>({
  username: Yup.string()
    .nullable()
    .test({
      name: 'name-fields-username',
      message: 'Either provide Username or both Name and Surname',
      test: (value, { parent }) => {
        const { username, firstName, lastName } = parent as UserFormSchema;
        if (!username && (!firstName || !lastName)) {
          return false;
        }
        return true;
      },
    }),
  firstName: Yup.string()
    .nullable()
    .test({
      name: 'name-fields-firstName',
      message: 'Either provide Username or both Name and Surname',
      test: (value, { parent }) => {
        const { username, firstName, lastName } = parent as UserFormSchema;
        if (!username && (!firstName || !lastName)) {
          return false;
        }
        return true;
      },
    }),
  lastName: Yup.string()
    .nullable()
    .test({
      name: 'name-fields-lastName',
      message: 'Either provide Username or both Name and Surname',
      test: (value, { parent }) => {
        const { username, firstName, lastName } = parent as UserFormSchema;
        if (!username && (!firstName || !lastName)) {
          return false;
        }
        return true;
      },
    }),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  company: selectSchema.nullable(),
  disciplines: Yup.array().of(selectSchema).nullable(),
  role: selectSchema.required('Role is required'),
  googleCalendar: Yup.boolean().nullable(),
  anotherOne: Yup.boolean(),
});
