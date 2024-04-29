import { useCallback, useMemo } from 'react';

import {
  RoleForm,
  RoleFormSchema,
  useGetRoleForm,
  useGetRolePermissions,
  useUpdateRole,
} from '@/entities/role';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { UpdateRoleProps } from './UpdateRole.types';

export const UpdateRole: React.FC<UpdateRoleProps> = ({ requestType, setEntityModal }) => {
  const {
    data: roleData,
    isFetching: isFetchingRoleData,
    isSuccess: isSuccessRoleData,
  } = useGetRoleForm(requestType?.additional);

  const {
    data: rolePermissionsData,
    isFetching: isFetchingRolePermissionsData,
    isSuccess: isSuccessRolePermissionsData,
  } = useGetRolePermissions();

  const defaultFormData = useMemo<RoleFormSchema>(() => {
    if (!roleData || !rolePermissionsData) {
      return {};
    }

    return {
      name: roleData?.title ?? '',
      description: roleData?.description ?? '',
      permissions: rolePermissionsData?.map((permission) => {
        const isPermissionChecked = roleData?.permissions
          ?.map(({ id: elemId }) => ({ elemId }))
          .some((rolePermission) => rolePermission.elemId === permission.elemId);

        return {
          ...permission,
          checked: isPermissionChecked,
        };
      }),
    };
  }, [roleData, rolePermissionsData]);

  const { mutateAsync: onUpdateRole, isLoading: isUpdateLoading } = useUpdateRole();

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
          options: { type: 'list', canBeEmpty: true },
        },
      ]);

      await onUpdateRole({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateRole],
  );

  return (
    <>
      {!isFetchingRoleData &&
      !isFetchingRolePermissionsData &&
      isSuccessRoleData &&
      isSuccessRolePermissionsData ? (
        <RoleForm
          hiddenFields={['anotherOne']}
          defaultFormData={defaultFormData}
          contentPaddings="30px"
          footerType="primary"
          submitButtonLabel="Update"
          isLoading={isUpdateLoading}
          onSendData={onSendData}
          onCloseModal={setEntityModal}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
