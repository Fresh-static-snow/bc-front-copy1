import { useCallback, useMemo } from 'react';

import {
  BrandingForm,
  BrandingFormSchema,
  useGetBrandingForm,
  useUpdateBranding,
} from '@/entities/branding';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { UpdateBrandingProps } from './UpdateBranding.types';

export const UpdateBranding: React.FC<UpdateBrandingProps> = ({ requestType, setEntityModal }) => {
  const {
    data: brandingData,
    isFetching: isFetchingBrandingData,
    isSuccess: isSuccessBrandingData,
  } = useGetBrandingForm(requestType?.additional);

  const defaultFormData = useMemo<BrandingFormSchema>(() => {
    if (!brandingData) {
      return {};
    }

    return {
      name: brandingData?.name,
      logo: brandingData?.logo?.url,
      favicon: brandingData?.favicon?.url,
    };
  }, [brandingData]);

  const { mutateAsync: onUpdateBranding, isLoading: isCreateLoading } = useUpdateBranding();

  const onSendData = useCallback(
    async (data: BrandingFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'name', value: data.name },
        { key: 'logo', value: data.logo, options: { type: 'file', canBeEmpty: true } },
        { key: 'favicon', value: data.favicon, options: { type: 'file', canBeEmpty: true } },
      ]);

      await onUpdateBranding({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateBranding],
  );

  return (
    <>
      {!isFetchingBrandingData && isSuccessBrandingData ? (
        <BrandingForm
          hiddenFields={['favicon', 'anotherOne']}
          defaultFormData={defaultFormData}
          contentPaddings="30px"
          footerType="primary"
          submitButtonLabel="Update"
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
