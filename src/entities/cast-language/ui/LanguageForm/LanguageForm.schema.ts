import * as Yup from 'yup';

import { LanguageFormSchema } from './LanguageForm.types';

export const languageFormSchema = Yup.object<LanguageFormSchema>({
  name: Yup.string().required('Name is required'),
  keyword: Yup.string().required('Keyword is required'),
  anotherOne: Yup.boolean(),
});
