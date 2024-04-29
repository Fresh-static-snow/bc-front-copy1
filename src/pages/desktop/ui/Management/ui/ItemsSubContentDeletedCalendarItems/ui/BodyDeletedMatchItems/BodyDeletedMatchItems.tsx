import {
  useDeleteMatchList,
  useGetPreDeletedMatchItems,
  useRestorePreDeletedMatchList,
} from '@/entities/match';
import { DeletedTournamentList } from '@/entities/tournament';
import { useConfirmationActions } from '@/shared/lib';
import { ConfirmationModal } from '@/shared/ui/feedback';

import * as S from './BodyDeletedMatchItems.styles';

export const BodyDeletedMatchItems: React.FC = () => {
  const { data } = useGetPreDeletedMatchItems();

  const { mutateAsync: onRestoreMatchesItem, isLoading: isRestoreLoading } =
    useRestorePreDeletedMatchList();
  const { mutateAsync: onDeleteMatchesItem, isLoading: isDeleteLoading } = useDeleteMatchList();

  const {
    confirmDeleteId: confirmDeleteMatchesIds,
    confirmRestoreId: confirmRestoreMatchesIds,
    onOpenDeleteModal: onOpenDeleteMatchesModal,
    onCloseDeleteModal: onCloseDeleteMatchesModal,
    onOpenRestoreModal: onOpenRestoreMatchesModal,
    onCloseRestoreModal: onCloseRestoreMatchesModal,
    onDelete: onDeleteMatches,
    onRestore: onRestoreMatches,
  } = useConfirmationActions<(string | number)[]>({
    onDeleteItem: onDeleteMatchesItem,
    onRestoreItem: onRestoreMatchesItem,
  });

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteMatchesIds}
        onClose={onCloseDeleteMatchesModal}
        onConfirm={onDeleteMatches}
        title="Are you sure?"
        message="Would you like to remove this matches?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteLoading}
      />

      <ConfirmationModal
        isOpen={!!confirmRestoreMatchesIds}
        onClose={onCloseRestoreMatchesModal}
        onConfirm={onRestoreMatches}
        title="Are you sure?"
        message="Would you like to restore this matches?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreLoading}
      />

      <S.TournamentListWrapper>
        <DeletedTournamentList
          mainKey="pre-deleted-tournaments"
          tournaments={data}
          onDeleteMatches={onOpenDeleteMatchesModal}
          onRestoreMatches={onOpenRestoreMatchesModal}
          isLoading={isDeleteLoading || isRestoreLoading}
        />
      </S.TournamentListWrapper>
    </>
  );
};
