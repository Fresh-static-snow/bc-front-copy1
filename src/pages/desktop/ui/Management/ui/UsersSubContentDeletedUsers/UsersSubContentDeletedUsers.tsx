import {
  DeletedUserList,
  useDeleteUser,
  useGetPreDeletedUsers,
  useRestorePreDeletedUser,
} from '@/entities/user';
import { useConfirmationActions } from '@/shared/lib';
import { RelatedEventsContentById } from '@/shared/ui/data-display';
import { ConfirmationModal } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';

const UsersSubContentDeletedUsers: React.FC = () => {
  const { data: preDeletedUsersData } = useGetPreDeletedUsers();

  const { mutateAsync: onDeleteUser, isLoading: isDeleteLoading } = useDeleteUser();
  const { mutateAsync: onRestoreUser, isLoading: isRestoreLoading } = useRestorePreDeletedUser();

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
    onDeleteItem: onDeleteUser,
    onRestoreItem: onRestoreUser,
  });

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteId}
        isLoading={isDeleteLoading}
        onClose={onCloseDeleteModal}
        onConfirm={onDelete}
        title="Are you sure?"
        message="Would you like to remove this user?"
        confirmButtonLabel="Delete"
        maxWidth="400px"
        additionalContent={
          <RelatedEventsContentById
            title="User"
            entityId={confirmDeleteId}
            data={preDeletedUsersData}
          />
        }
      />

      <ConfirmationModal
        isOpen={!!confirmRestoreId}
        isLoading={isRestoreLoading}
        onClose={onCloseRestoreModal}
        onConfirm={onRestore}
        title="Are you sure?"
        message="Would you like to restore this user?"
        confirmButtonLabel="Restore"
        additionalContent={
          <RelatedEventsContentById
            title="User"
            entityId={confirmRestoreId}
            data={preDeletedUsersData}
          />
        }
      />

      <SlicedContentLayout.Section width="608px" borderRight>
        <DeletedUserList
          mainKey="content-deleted-users"
          dataList={preDeletedUsersData}
          onDelete={onOpenDeleteModal}
          onRestore={onOpenRestoreModal}
          isLoading={isDeleteLoading || isRestoreLoading}
        />
      </SlicedContentLayout.Section>
    </>
  );
};

export default UsersSubContentDeletedUsers;
