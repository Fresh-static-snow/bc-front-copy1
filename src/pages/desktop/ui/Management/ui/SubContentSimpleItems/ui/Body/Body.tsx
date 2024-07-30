import { useCallback } from 'react';

import { EditEntityList } from '@/entities/management';
import { useConfirmationActions } from '@/shared/lib';
import { RelatedEventsContentById } from '@/shared/ui/data-display';
import { ConfirmationModal } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { useManagementMenuStore } from '@/widgets/desktop';

import { BodyProps } from './Body.types';

export const Body: React.FC<BodyProps> = ({ activeTemplate }) => {
  const setEditingRequestType = useManagementMenuStore((state) => state.setEditingRequestType);

  const { data: activeTemplateData } = activeTemplate.useGetItems();

  const { mutateAsync: onDeleteItem, isLoading: isDeleteLoading } = activeTemplate.useDelete();

  const { confirmDeleteData, onOpenDeleteModal, onCloseDeleteModal, onDelete } =
    useConfirmationActions<string | number>({
      onDeleteItem: (data) => {
        onDeleteItem({ id: data });
      },
    });

  const onEdit = useCallback(
    (id: number | string) => {
      setEditingRequestType({
        value: activeTemplate.requestType.value,
        label: activeTemplate.requestType.label,
        additional: String(id),
      });
    },
    [activeTemplate, setEditingRequestType],
  );

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteData}
        isLoading={isDeleteLoading}
        onClose={onCloseDeleteModal}
        onConfirm={onDelete}
        title="Are you sure?"
        message="Would you like to remove this item?"
        maxWidth="400px"
        additionalContent={
          <RelatedEventsContentById
            entityId={confirmDeleteData}
            data={activeTemplateData}
            withoutBackMessage={activeTemplate.type === 'simple'}
          />
        }
      />

      <SlicedContentLayout.Section width="608px" borderRight>
        <EditEntityList
          mainKey={activeTemplate.mainKey}
          dataList={activeTemplateData}
          onEdit={onEdit}
          onDelete={onOpenDeleteModal}
          isLoading={isDeleteLoading}
        />
      </SlicedContentLayout.Section>
    </>
  );
};
