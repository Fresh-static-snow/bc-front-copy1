import { useCallback } from 'react';

import { SimpleEntityItemForm, SimpleEntityItemFormSchema } from '@/entities/management';
import { appendFormData } from '@/shared/lib';

import { entityCreatingTemplates } from '../../const';
import { EntityTemplatesKeys } from '../../types';
import { CreateSimpleEntityItemProps } from './CreateSimpleEntityItem.types';

export const CreateSimpleEntityItem: React.FC<CreateSimpleEntityItemProps> = ({
  requestType,
  setEntityModal,
}) => {
  const { mutateAsync: onCreateItem, isLoading: isCreateLoading } =
    entityCreatingTemplates[requestType?.value as EntityTemplatesKeys].useCreate();

  const onSendData = useCallback(
    async (data: SimpleEntityItemFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [{ key: 'name', value: data.name }]);

      await onCreateItem({ formData });
    },
    [onCreateItem],
  );

  return (
    <SimpleEntityItemForm
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isCreateLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
