import { useCallback, useMemo } from 'react';

import { useGetRoleOptions } from '@/entities/role';
import { useCreateUser, UserForm, UserFormSchema } from '@/entities/user';
import { useGetUserCompanyOptions } from '@/entities/user-company';
import { useGetUserDisciplineOptions } from '@/entities/user-discipline';
import { appendFormData } from '@/shared/lib';

import { CreateUserProps } from './CreateUser.types';

export const CreateUser: React.FC<CreateUserProps> = ({ id, setEntityModal }) => {
  const { data: userDisciplinesData } = useGetUserDisciplineOptions();
  const { data: userCompaniesData } = useGetUserCompanyOptions();
  const { data: rolesData } = useGetRoleOptions();

  const currentFormData = useMemo<UserFormSchema>(() => {
    if (!id) {
      return {};
    }

    return {
      company: userCompaniesData?.find((company) => company.value === id),
    };
  }, [userCompaniesData, id]);

  const { mutateAsync: onCreateUser, isLoading } = useCreateUser();

  const onSendData = useCallback(
    async (data: UserFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'nick', value: data.username },
        { key: 'first_name', value: data.firstName },
        { key: 'last_name', value: data.lastName },
        { key: 'avatar', value: data.avatar, options: { type: 'file' } },
        { key: 'email', value: data.email },
        { key: 'company_id', value: data.company?.value },
        {
          key: 'user_discipline_ids[]',
          value: data.disciplines?.map((discipline) => discipline.value),
          options: { type: 'list' },
        },
        { key: 'role_ids[]', value: data.role?.value },
        { key: 'google_calendar_status', value: String(data.googleCalendar) },
        { key: 'google_calendar_required', value: String(data.googleCalendar) },
      ]);

      await onCreateUser({ formData });
    },
    [onCreateUser],
  );

  return (
    <UserForm
      userDisciplineOptions={userDisciplinesData}
      companyOptions={userCompaniesData}
      roleOptions={rolesData}
      contentPaddings="30px"
      fieldsDirection="row"
      footerType="primary"
      formData={currentFormData}
      submitButtonLabel="Create"
      isLoading={isLoading}
      onCloseModal={setEntityModal}
      onSendData={onSendData}
    />
  );
};
