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
    confirmDeleteData,
    confirmRestoreData,
    onOpenDeleteModal,
    onCloseDeleteModal,
    onOpenRestoreModal,
    onCloseRestoreModal,
    onDelete,
    onRestore,
  } = useConfirmationActions<string | number>({
    onDeleteItem: (data) => {
      onDeleteUser({ id: data });
    },
    onRestoreItem: (data) => {
      onRestoreUser({ id: data });
    },
  });

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteData}
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
            entityId={confirmDeleteData}
            data={preDeletedUsersData}
          />
        }
      />

      <ConfirmationModal
        isOpen={!!confirmRestoreData}
        isLoading={isRestoreLoading}
        onClose={onCloseRestoreModal}
        onConfirm={onRestore}
        title="Are you sure?"
        message="Would you like to restore this user?"
        confirmButtonLabel="Restore"
        additionalContent={
          <RelatedEventsContentById
            title="User"
            entityId={confirmRestoreData}
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
