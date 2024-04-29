import * as Yup from 'yup';

import { TeamFormSchema } from './TeamForm.types';

const selectSchema = Yup.object({
  label: Yup.string(),
  value: Yup.string(),
  additional: Yup.string().nullable(),
});

export const teamFormSchema = Yup.object<TeamFormSchema>({
  discipline: selectSchema.required('Discipline is a required field'),
  name: Yup.string().required('Name is required'),
  anotherOne: Yup.boolean(),
});
