import { useDeleteMatchList, useRestorePreDeletedMatchList } from '@/entities/match';
import {
  DeletedTournamentList,
  useDeleteTournament,
  useGetPreDeletedTournamentItems,
  useRestorePreDeletedTournament,
} from '@/entities/tournament';
import { useConfirmationActions } from '@/shared/lib';
import { ConfirmationModal } from '@/shared/ui/feedback';

import * as S from './BodyDeletedTournamentItems.styles';

export const BodyDeletedTournamentItems: React.FC = () => {
  const { data } = useGetPreDeletedTournamentItems();

  const { mutateAsync: onRestoreTournamentItem, isLoading: isRestoreTournamentLoading } =
    useRestorePreDeletedTournament();
  const { mutateAsync: onDeleteTournamentItem, isLoading: isDeleteTournamentLoading } =
    useDeleteTournament();

  const { mutateAsync: onRestoreMatchesItem, isLoading: isRestoreMatchesLoading } =
    useRestorePreDeletedMatchList();
  const { mutateAsync: onDeleteMatchesItem, isLoading: isDeleteMatchesLoading } =
    useDeleteMatchList();

  const {
    confirmDeleteId: confirmDeleteTournamentId,
    confirmRestoreId: confirmRestoreTournamentId,
    onOpenDeleteModal: onOpenDeleteTournamentModal,
    onCloseDeleteModal: onCloseDeleteTournamentModal,
    onOpenRestoreModal: onOpenRestoreTournamentModal,
    onCloseRestoreModal: onCloseRestoreTournamentModal,
    onDelete: onDeleteTournament,
    onRestore: onRestoreTournament,
  } = useConfirmationActions<string | number>({
    onDeleteItem: onDeleteTournamentItem,
    onRestoreItem: onRestoreTournamentItem,
  });

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
        isOpen={!!confirmDeleteTournamentId}
        onClose={onCloseDeleteTournamentModal}
        onConfirm={onDeleteTournament}
        title="Are you sure?"
        message="Would you like to remove this tournament?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteTournamentLoading}
      />
      <ConfirmationModal
        isOpen={!!confirmRestoreTournamentId}
        onClose={onCloseRestoreTournamentModal}
        onConfirm={onRestoreTournament}
        title="Are you sure?"
        message="Would you like to restore this tournament?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreTournamentLoading}
      />

      <ConfirmationModal
        isOpen={!!confirmDeleteMatchesIds}
        onClose={onCloseDeleteMatchesModal}
        onConfirm={onDeleteMatches}
        title="Are you sure?"
        message="Would you like to remove this matches?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteMatchesLoading}
      />
      <ConfirmationModal
        isOpen={!!confirmRestoreMatchesIds}
        onClose={onCloseRestoreMatchesModal}
        onConfirm={onRestoreMatches}
        title="Are you sure?"
        message="Would you like to restore this matches?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreMatchesLoading}
      />

      <S.TournamentListWrapper>
        <DeletedTournamentList
          mainKey="pre-deleted-tournaments"
          tournaments={data}
          onDeleteTournament={onOpenDeleteTournamentModal}
          onRestoreTournament={onOpenRestoreTournamentModal}
          onDeleteMatches={onOpenDeleteMatchesModal}
          onRestoreMatches={onOpenRestoreMatchesModal}
          isLoading={
            isRestoreTournamentLoading ||
            isDeleteTournamentLoading ||
            isDeleteMatchesLoading ||
            isRestoreMatchesLoading
          }
        />
      </S.TournamentListWrapper>
    </>
  );
};
