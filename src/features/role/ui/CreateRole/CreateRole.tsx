import { useCallback } from 'react';

import { RoleForm, RoleFormSchema, useCreateRole, useGetRolePermissions } from '@/entities/role';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { CreateRoleProps } from './CreateRole.types';

export const CreateRole: React.FC<CreateRoleProps> = ({ setEntityModal }) => {
  const { data: rolePermissionsData, isSuccess: isSuccessRolePermissionsData } =
    useGetRolePermissions();

  const { mutateAsync: onCreateRole, isLoading: isCreateLoading } = useCreateRole();

  const onSendData = useCallback(
    async (data: RoleFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'title', value: data.name },
        { key: 'description', value: data.description },
        {
          key: 'permissions[]',
          value: data.permissions
            ?.filter((permission) => permission.checked)
            .map((permission) => permission.elemId),
          options: { type: 'list' },
        },
      ]);

      await onCreateRole({ formData });
    },
    [onCreateRole],
  );

  return (
    <>
      {isSuccessRolePermissionsData ? (
        <RoleForm
          defaultFormData={{
            permissions: rolePermissionsData,
          }}
          contentPaddings="30px"
          footerType="primary"
          submitButtonLabel="Create"
          isLoading={isCreateLoading}
          onSendData={onSendData}
          onCloseModal={setEntityModal}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
