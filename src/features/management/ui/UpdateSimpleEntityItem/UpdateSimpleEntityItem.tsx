import { useCallback, useMemo } from 'react';

import { SimpleEntityItemForm, SimpleEntityItemFormSchema } from '@/entities/management';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { entityEditingTemplates } from '../../const';
import { EntityTemplatesKeys } from '../../types';
import { UpdateSimpleEntityItemProps } from './UpdateSimpleEntityItem.types';

export const UpdateSimpleEntityItem: React.FC<UpdateSimpleEntityItemProps> = ({
  requestType,
  setEntityModal,
}) => {
  const {
    data: entityData,
    isFetching: isFetchingEntityData,
    isSuccess: isSuccessEntityData,
  } = entityEditingTemplates[requestType?.value as EntityTemplatesKeys].useGetForm(
    requestType?.additional,
  );

  const defaultFormData = useMemo<SimpleEntityItemFormSchema>(() => {
    if (!entityData) {
      return {};
    }

    return {
      name: entityData?.name,
    };
  }, [entityData]);

  const { mutateAsync: onUpdateItem, isLoading: isCreateLoading } =
    entityEditingTemplates[requestType?.value as EntityTemplatesKeys].useUpdate();

  const onSendData = useCallback(
    async (data: SimpleEntityItemFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [{ key: 'name', value: data.name }]);

      await onUpdateItem({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateItem],
  );

  return (
    <>
      {!isFetchingEntityData && isSuccessEntityData ? (
        <SimpleEntityItemForm
          defaultFormData={defaultFormData}
          hiddenFields={['anotherOne']}
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
