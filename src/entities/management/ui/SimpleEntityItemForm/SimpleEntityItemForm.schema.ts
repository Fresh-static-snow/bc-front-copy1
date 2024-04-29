import * as Yup from 'yup';

import { SimpleEntityItemFormSchema } from './SimpleEntityItemForm.types';

export const simpleEntityItemFormSchema = Yup.object<SimpleEntityItemFormSchema>({
  name: Yup.string().required('Name is required'),
  anotherOne: Yup.boolean(),
});
