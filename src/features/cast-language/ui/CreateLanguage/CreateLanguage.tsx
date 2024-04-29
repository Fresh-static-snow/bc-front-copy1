import { useCallback } from 'react';

import { LanguageForm, LanguageFormSchema, useCreateCastLanguage } from '@/entities/cast-language';
import { appendFormData } from '@/shared/lib';

import { CreateLanguageProps } from './CreateLanguage.types';

export const CreateLanguage: React.FC<CreateLanguageProps> = ({ setEntityModal }) => {
  const { mutateAsync: onCreateLanguage, isLoading: isCreateLoading } = useCreateCastLanguage();

  const onSendData = useCallback(
    async (data: LanguageFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'name', value: data.name },
        { key: 'keyword', value: data.keyword },
      ]);

      await onCreateLanguage({ formData });
    },
    [onCreateLanguage],
  );

  return (
    <LanguageForm
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isCreateLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
