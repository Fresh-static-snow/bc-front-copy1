import * as Yup from 'yup';

import { ChangePasswordFormSchema } from './ChangePasswordForm.types';

export const changePasswordSchema = Yup.object<ChangePasswordFormSchema>({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .test({
      name: 'password-match',
      message: 'Passwords do not match',
      test: (value, { parent }) => {
        const { newPassword, newPasswordRepeated } = parent as ChangePasswordFormSchema;
        if (newPassword !== newPasswordRepeated) {
          return false;
        }
        return true;
      },
    }),
  newPasswordRepeated: Yup.string()
    .required('Repeat new password is required')
    .test({
      name: 'password-confirmation-match',
      message: 'Passwords do not match',
      test: (value, { parent }) => {
        const { newPassword, newPasswordRepeated } = parent as ChangePasswordFormSchema;
        if (newPassword !== newPasswordRepeated) {
          return false;
        }
        return true;
      },
    }),
});
