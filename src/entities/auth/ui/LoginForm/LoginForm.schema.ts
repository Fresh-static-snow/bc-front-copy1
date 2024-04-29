import * as Yup from 'yup';

import { LoginFormSchema } from './LoginForm.types';

export const loginSchema = Yup.object<LoginFormSchema>({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  rememberMe: Yup.boolean().nullable(),
});
