import {
  DeletedDisciplineList,
  useDeleteGameDiscipline,
  useGetPreDeletedGameDisciplineItems,
  useRestorePreDeletedDiscipline,
} from '@/entities/game-discipline';
import { useDeleteMatchList, useRestorePreDeletedMatchList } from '@/entities/match';
import { useDeleteTournament, useRestorePreDeletedTournament } from '@/entities/tournament';
import { useConfirmationActions } from '@/shared/lib';
import { ConfirmationModal } from '@/shared/ui/feedback';

export const BodyDeletedDisciplineItems: React.FC = () => {
  const { data } = useGetPreDeletedGameDisciplineItems();

  const { mutateAsync: onRestoreDisciplineItem, isLoading: isRestoreDisciplineLoading } =
    useRestorePreDeletedDiscipline();
  const { mutateAsync: onDeleteDisciplineItem, isLoading: isDeleteDisciplineLoading } =
    useDeleteGameDiscipline();

  const { mutateAsync: onRestoreTournamentItem, isLoading: isRestoreTournamentLoading } =
    useRestorePreDeletedTournament();
  const { mutateAsync: onDeleteTournamentItem, isLoading: isDeleteTournamentLoading } =
    useDeleteTournament();

  const { mutateAsync: onRestoreMatchesItem, isLoading: isRestoreMatchesLoading } =
    useRestorePreDeletedMatchList();
  const { mutateAsync: onDeleteMatchesItem, isLoading: isDeleteMatchesLoading } =
    useDeleteMatchList();

  const {
    confirmDeleteId: confirmDeleteDisciplineId,
    confirmRestoreId: confirmRestoreDisciplineId,
    onOpenDeleteModal: onOpenDeleteDisciplineModal,
    onCloseDeleteModal: onCloseDeleteDisciplineModal,
    onOpenRestoreModal: onOpenRestoreDisciplineModal,
    onCloseRestoreModal: onCloseRestoreDisciplineModal,
    onDelete: onDeleteDiscipline,
    onRestore: onRestoreDiscipline,
  } = useConfirmationActions<string | number>({
    onDeleteItem: onDeleteDisciplineItem,
    onRestoreItem: onRestoreDisciplineItem,
  });

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
        isOpen={!!confirmDeleteDisciplineId}
        onClose={onCloseDeleteDisciplineModal}
        onConfirm={onDeleteDiscipline}
        title="Are you sure?"
        message="Would you like to remove this discipline?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteDisciplineLoading}
      />
      <ConfirmationModal
        isOpen={!!confirmRestoreDisciplineId}
        onClose={onCloseRestoreDisciplineModal}
        onConfirm={onRestoreDiscipline}
        title="Are you sure?"
        message="Would you like to restore this discipline?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreDisciplineLoading}
      />

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

      <DeletedDisciplineList
        mainKey="pre-deleted-disciplines"
        disciplines={data}
        onDeleteDiscipline={onOpenDeleteDisciplineModal}
        onRestoreDiscipline={onOpenRestoreDisciplineModal}
        onDeleteTournament={onOpenDeleteTournamentModal}
        onRestoreTournament={onOpenRestoreTournamentModal}
        onDeleteMatches={onOpenDeleteMatchesModal}
        onRestoreMatches={onOpenRestoreMatchesModal}
        isLoading={
          isDeleteDisciplineLoading ||
          isRestoreDisciplineLoading ||
          isDeleteTournamentLoading ||
          isRestoreTournamentLoading ||
          isDeleteMatchesLoading ||
          isRestoreMatchesLoading
        }
      />
    </>
  );
};
