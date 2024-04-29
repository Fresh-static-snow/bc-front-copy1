import { useCallback, useMemo } from 'react';

import {
  LanguageForm,
  LanguageFormSchema,
  useGetCastLanguageForm,
  useUpdateCastLanguage,
} from '@/entities/cast-language';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { UpdateLanguageProps } from './UpdateLanguage.types';

export const UpdateLanguage: React.FC<UpdateLanguageProps> = ({ requestType, setEntityModal }) => {
  const {
    data: languageData,
    isFetching: isFetchingLanguageData,
    isSuccess: isSuccessLanguageData,
  } = useGetCastLanguageForm(requestType?.additional);

  const defaultFormData = useMemo<LanguageFormSchema>(() => {
    if (!languageData) {
      return {};
    }

    return {
      name: languageData?.name,
      keyword: languageData?.keyword,
    };
  }, [languageData]);

  const { mutateAsync: onUpdateLanguage, isLoading: isUpdateLoading } = useUpdateCastLanguage();

  const onSendData = useCallback(
    async (data: LanguageFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'name', value: data.name },
        { key: 'keyword', value: data.keyword },
      ]);

      await onUpdateLanguage({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateLanguage],
  );

  return (
    <>
      {!isFetchingLanguageData && isSuccessLanguageData ? (
        <LanguageForm
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
