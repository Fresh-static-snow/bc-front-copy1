import * as Yup from 'yup';

import { PasswordFormSchema } from './PasswordForm.types';

export const invitationSchema = Yup.object<PasswordFormSchema>({
  password: Yup.string()
    .required('Password is required')
    .test({
      name: 'password-match',
      message: 'Passwords do not match',
      test: (value, { parent }) => {
        const { password, passwordConfirm } = parent as PasswordFormSchema;
        if (password !== passwordConfirm) {
          return false;
        }
        return true;
      },
    }),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .test({
      name: 'password-confirmation-match',
      message: 'Passwords do not match',
      test: (value, { parent }) => {
        const { password, passwordConfirm } = parent as PasswordFormSchema;
        if (password !== passwordConfirm) {
          return false;
        }
        return true;
      },
    }),
});
