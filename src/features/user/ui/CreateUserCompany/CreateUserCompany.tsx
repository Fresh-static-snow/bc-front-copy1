import { useCallback } from 'react';

import {
  useCreateUserCompany,
  UserCompanyForm,
  UserCompanyFormSchema,
} from '@/entities/user-company';
import { appendFormData } from '@/shared/lib';

import { CreateUserCompanyProps } from './CreateUserCompany.types';

export const CreateUserCompany: React.FC<CreateUserCompanyProps> = ({ setEntityModal }) => {
  const { mutateAsync: onCreateCompany, isLoading } = useCreateUserCompany();

  const onSendData = useCallback(
    async (data: UserCompanyFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'title', value: data.companyName },
        { key: 'cover', value: data.cover, options: { type: 'file' } },
      ]);

      await onCreateCompany({ formData });
    },
    [onCreateCompany],
  );

  return (
    <UserCompanyForm
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
