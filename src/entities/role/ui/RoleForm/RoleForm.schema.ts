import * as Yup from 'yup';

import { FormPermissionListSchema, RoleFormSchema } from './RoleForm.types';

const formPermissionListSchema = Yup.array().of(
  Yup.object<FormPermissionListSchema>({
    checked: Yup.boolean().nullable(),
  }),
);

export const roleSchema = Yup.object<RoleFormSchema>({
  name: Yup.string().required('Role name is required'),
  description: Yup.string().nullable(),
  permissions: formPermissionListSchema.nullable(),
  anotherOne: Yup.boolean(),
});
