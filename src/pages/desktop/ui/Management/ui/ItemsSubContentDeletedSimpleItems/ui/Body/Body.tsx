import { useMemo } from 'react';

import { useConfirmationActions } from '@/shared/lib';
import { RelatedEventsContentById } from '@/shared/ui/data-display';
import { ConfirmationModal } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';

import { contentTemplates } from './Body.const';
import { BodyProps } from './Body.types';

export const Body: React.FC<BodyProps> = ({ activeTemplate }) => {
  const ActiveContent = useMemo(
    () => contentTemplates?.[activeTemplate.type] ?? contentTemplates.simple,
    [activeTemplate.type],
  );

  const { data } = activeTemplate.useGetItems();

  const { mutateAsync: onDeleteItem, isLoading: isDeleteLoading } = activeTemplate.useDelete();
  const { mutateAsync: onRestoreItem, isLoading: isRestoreLoading } = activeTemplate.useRestore();

  const {
    confirmDeleteId,
    confirmRestoreId,
    onOpenDeleteModal,
    onCloseDeleteModal,
    onOpenRestoreModal,
    onCloseRestoreModal,
    onDelete,
    onRestore,
  } = useConfirmationActions<string | number>({
    onDeleteItem,
    onRestoreItem,
  });

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteId}
        isLoading={isDeleteLoading}
        onClose={onCloseDeleteModal}
        onConfirm={onDelete}
        title="Are you sure?"
        message="Would you like to remove this item?"
        confirmButtonLabel="Delete"
        maxWidth="400px"
        additionalContent={
          <RelatedEventsContentById
            entityId={confirmDeleteId}
            data={data}
            withoutBackMessage={activeTemplate.type === 'simple'}
          />
        }
      />

      <ConfirmationModal
        isOpen={!!confirmRestoreId}
        isLoading={isRestoreLoading}
        onClose={onCloseRestoreModal}
        onConfirm={onRestore}
        title="Are you sure?"
        message="Would you like to restore this item?"
        confirmButtonLabel="Restore"
        maxWidth="400px"
        additionalContent={
          <RelatedEventsContentById
            entityId={confirmRestoreId}
            data={data}
            withoutBackMessage={activeTemplate.type === 'simple'}
          />
        }
      />

      <SlicedContentLayout.Section width="608px" borderRight>
        <ActiveContent
          mainKey={activeTemplate.mainKey}
          dataList={data}
          onDelete={onOpenDeleteModal}
          onRestore={onOpenRestoreModal}
          isLoading={isDeleteLoading || isRestoreLoading}
        />
      </SlicedContentLayout.Section>
    </>
  );
};
