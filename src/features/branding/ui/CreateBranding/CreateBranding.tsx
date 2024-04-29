import { useCallback } from 'react';

import { BrandingForm, BrandingFormSchema, useCreateBranding } from '@/entities/branding';
import { appendFormData } from '@/shared/lib';

import { CreateBrandingProps } from './CreateBranding.types';

export const CreateBranding: React.FC<CreateBrandingProps> = ({ setEntityModal }) => {
  const { mutateAsync: onCreateBranding, isLoading: isCreateLoading } = useCreateBranding();

  const onSendData = useCallback(
    async (data: BrandingFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'name', value: data.name },
        { key: 'logo', value: data.logo, options: { type: 'file' } },
        { key: 'favicon', value: data.favicon, options: { type: 'file' } },
      ]);

      await onCreateBranding({ formData });
    },
    [onCreateBranding],
  );

  return (
    <BrandingForm
      hiddenFields={['favicon']}
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isCreateLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
