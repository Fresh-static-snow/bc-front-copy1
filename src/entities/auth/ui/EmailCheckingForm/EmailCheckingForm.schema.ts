import * as Yup from 'yup';

import { EmailCheckingFormSchema } from './EmailCheckingForm.types';

export const emailSchema = Yup.object<EmailCheckingFormSchema>({
  email: Yup.string().email('Invalid email').required('Email is required'),
});
