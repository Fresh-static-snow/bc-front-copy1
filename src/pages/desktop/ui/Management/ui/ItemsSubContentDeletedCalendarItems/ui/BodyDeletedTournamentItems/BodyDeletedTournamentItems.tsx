import { useDeleteSegmentList, useRestorePreDeletedSegmentList } from '@/entities/event-segment';
import { useDeleteMatchList, useRestorePreDeletedMatchList } from '@/entities/match';
import {
  DeletedTournamentList,
  useDeleteTournament,
  useGetPreDeletedTournamentItems,
  useRestorePreDeletedTournament,
} from '@/entities/tournament';
import { useConfirmationActions } from '@/shared/lib';
import { PreDeletedMatch, PreDeletedSegment } from '@/shared/types/entities.types';
import { ConfirmationModal } from '@/shared/ui/feedback';

import * as S from './BodyDeletedTournamentItems.styles';

export const BodyDeletedTournamentItems: React.FC = () => {
  const { data: tournaments } = useGetPreDeletedTournamentItems();

  const { mutateAsync: onRestoreTournamentItem, isLoading: isRestoreTournamentLoading } =
    useRestorePreDeletedTournament();
  const { mutateAsync: onDeleteTournamentItem, isLoading: isDeleteTournamentLoading } =
    useDeleteTournament();

  const { mutateAsync: onRestoreMatchesItem, isLoading: isRestoreMatchesLoading } =
    useRestorePreDeletedMatchList();
  const { mutateAsync: onDeleteMatchesItem, isLoading: isDeleteMatchesLoading } =
    useDeleteMatchList();

  const { mutateAsync: onRestoreSegmentsItem, isLoading: isRestoreSegmentsLoading } =
    useRestorePreDeletedSegmentList();
  const { mutateAsync: onDeleteSegmentsItem, isLoading: isDeleteSegmentsLoading } =
    useDeleteSegmentList();

  const {
    confirmDeleteData: confirmDeleteTournamentId,
    confirmRestoreData: confirmRestoreTournamentId,
    onOpenDeleteModal: onOpenDeleteTournamentModal,
    onCloseDeleteModal: onCloseDeleteTournamentModal,
    onOpenRestoreModal: onOpenRestoreTournamentModal,
    onCloseRestoreModal: onCloseRestoreTournamentModal,
    onDelete: onDeleteTournament,
    onRestore: onRestoreTournament,
  } = useConfirmationActions<string | number>({
    onDeleteItem: (data) => {
      onDeleteTournamentItem({ id: data });
    },
    onRestoreItem: (data) => {
      onRestoreTournamentItem({ id: data });
    },
  });

  const {
    confirmDeleteData: confirmDeleteMatchesIds,
    confirmRestoreData: confirmRestoreMatchesIds,
    onOpenDeleteModal: onOpenDeleteMatchesModal,
    onCloseDeleteModal: onCloseDeleteMatchesModal,
    onOpenRestoreModal: onOpenRestoreMatchesModal,
    onCloseRestoreModal: onCloseRestoreMatchesModal,
    onDelete: onDeleteMatches,
    onRestore: onRestoreMatches,
  } = useConfirmationActions<(PreDeletedMatch | PreDeletedSegment)[]>({
    onDeleteItem: (data) => {
      const segments = data.filter((item) => item.type === 'Segment');
      const matches = data.filter((item) => item.type === 'Match');

      if (segments.length) {
        onDeleteSegmentsItem({
          ids: segments.map((item) => item.id),
        });
      }
      if (matches.length) {
        onDeleteMatchesItem({
          ids: matches.map((item) => item.id),
        });
      }
    },
    onRestoreItem: (data) => {
      const segments = data.filter((item) => item.type === 'Segment');
      const matches = data.filter((item) => item.type === 'Match');

      if (segments.length) {
        onRestoreSegmentsItem({
          ids: segments.map((item) => item.id),
        });
      }
      if (matches.length) {
        onRestoreMatchesItem({
          ids: matches.map((item) => item.id),
        });
      }
    },
  });

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteTournamentId}
        onClose={onCloseDeleteTournamentModal}
        onConfirm={onDeleteTournament}
        title="Are you sure?"
        message="Would you like to remove this event?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteTournamentLoading}
      />
      <ConfirmationModal
        isOpen={!!confirmRestoreTournamentId}
        onClose={onCloseRestoreTournamentModal}
        onConfirm={onRestoreTournament}
        title="Are you sure?"
        message="Would you like to restore this event?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreTournamentLoading}
      />

      <ConfirmationModal
        isOpen={!!confirmDeleteMatchesIds}
        onClose={onCloseDeleteMatchesModal}
        onConfirm={onDeleteMatches}
        title="Are you sure?"
        message="Would you like to remove this segments?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteMatchesLoading}
      />
      <ConfirmationModal
        isOpen={!!confirmRestoreMatchesIds}
        onClose={onCloseRestoreMatchesModal}
        onConfirm={onRestoreMatches}
        title="Are you sure?"
        message="Would you like to restore this segments?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreMatchesLoading}
      />

      <S.TournamentListWrapper>
        <DeletedTournamentList
          mainKey="pre-deleted-tournaments"
          tournaments={tournaments}
          onDeleteTournament={onOpenDeleteTournamentModal}
          onRestoreTournament={onOpenRestoreTournamentModal}
          onDeleteMatches={onOpenDeleteMatchesModal}
          onRestoreMatches={onOpenRestoreMatchesModal}
          isLoading={
            isRestoreTournamentLoading ||
            isDeleteTournamentLoading ||
            isDeleteMatchesLoading ||
            isRestoreMatchesLoading ||
            isDeleteSegmentsLoading ||
            isRestoreSegmentsLoading
          }
        />
      </S.TournamentListWrapper>
    </>
  );
};
