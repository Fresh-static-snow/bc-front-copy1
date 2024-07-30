import {
  useDeleteSegmentList,
  useGetPreDeletedSegmentItems,
  useRestorePreDeletedSegmentList,
} from '@/entities/event-segment';
import { DeletedTournamentList } from '@/entities/tournament';
import { useConfirmationActions } from '@/shared/lib';
import { PreDeletedMatch, PreDeletedSegment } from '@/shared/types/entities.types';
import { ConfirmationModal } from '@/shared/ui/feedback';

import * as S from './BodyDeletedSegmentItems.styles';

export const BodyDeletedSegmentItems: React.FC = () => {
  const { data: tournaments } = useGetPreDeletedSegmentItems();

  const { mutateAsync: onRestoreSegmentsItem, isLoading: isRestoreLoading } =
    useRestorePreDeletedSegmentList();
  const { mutateAsync: onDeleteSegmentsItem, isLoading: isDeleteLoading } = useDeleteSegmentList();

  const {
    confirmDeleteData: confirmDeleteSegmentsIds,
    confirmRestoreData: confirmRestoreSegmentsIds,
    onOpenDeleteModal: onOpenDeleteSegmentsModal,
    onCloseDeleteModal: onCloseDeleteSegmentsModal,
    onOpenRestoreModal: onOpenRestoreSegmentsModal,
    onCloseRestoreModal: onCloseRestoreSegmentsModal,
    onDelete: onDeleteSegments,
    onRestore: onRestoreSegments,
  } = useConfirmationActions<(PreDeletedMatch | PreDeletedSegment)[]>({
    onDeleteItem: (data) => {
      onDeleteSegmentsItem({ ids: data.map((item) => item.id) });
    },
    onRestoreItem: (data) => {
      onRestoreSegmentsItem({ ids: data.map((item) => item.id) });
    },
  });

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteSegmentsIds}
        onClose={onCloseDeleteSegmentsModal}
        onConfirm={onDeleteSegments}
        title="Are you sure?"
        message="Would you like to remove this segments?"
        confirmButtonLabel="Delete"
        isLoading={isDeleteLoading}
      />

      <ConfirmationModal
        isOpen={!!confirmRestoreSegmentsIds}
        onClose={onCloseRestoreSegmentsModal}
        onConfirm={onRestoreSegments}
        title="Are you sure?"
        message="Would you like to restore this segments?"
        confirmButtonLabel="Restore"
        isLoading={isRestoreLoading}
      />

      <S.TournamentListWrapper>
        <DeletedTournamentList
          mainKey="pre-deleted-tournaments"
          tournaments={tournaments}
          onDeleteMatches={onOpenDeleteSegmentsModal}
          onRestoreMatches={onOpenRestoreSegmentsModal}
          isLoading={isDeleteLoading || isRestoreLoading}
        />
      </S.TournamentListWrapper>
    </>
  );
};
