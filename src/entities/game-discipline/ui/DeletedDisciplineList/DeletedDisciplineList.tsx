import { useCallback } from 'react';

import { EntityAccordionItem } from '@/entities/management';
import { DeletedTournamentList } from '@/entities/tournament';
import { IconRotateCcwSvg, IconTrashSvg } from '@/shared/assets';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './DeletedDisciplineList.styles';
import { DeletedDisciplineListProps } from './DeletedDisciplineList.types';

export const DeletedDisciplineList: React.FC<DeletedDisciplineListProps> = ({
  mainKey,
  disciplines,
  isLoading,
  onDeleteDiscipline,
  onRestoreDiscipline,
  onDeleteTournament,
  onRestoreTournament,
  onDeleteMatches,
  onRestoreMatches,
}) => {
  const onClickDeleteDiscipline = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDeleteDiscipline(id);
    },
    [onDeleteDiscipline],
  );
  const onClickRestoreDiscipline = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onRestoreDiscipline(id);
    },
    [onRestoreDiscipline],
  );

  return (
    <S.Root>
      {disciplines?.map(({ id, title, tournaments }) => (
        <EntityAccordionItem
          key={`${mainKey}-${id}`}
          disabled={tournaments?.length === 0}
          startRotationPositionDeg={-90}
          endRotationPositionDeg={90}
          title={title}
          content={
            <S.TournamentListWrapper>
              <DeletedTournamentList
                mainKey={`${mainKey}-${id}-tournaments`}
                tournaments={tournaments}
                onDeleteTournament={onDeleteTournament}
                onRestoreTournament={onRestoreTournament}
                onDeleteMatches={onDeleteMatches}
                onRestoreMatches={onRestoreMatches}
                isLoading={isLoading}
                dashedBorder
                withoutLastChildBorder
              />
            </S.TournamentListWrapper>
          }
          elementsList={[
            {
              key: `${mainKey}-${id}-delete`,
              content: (
                <PrimaryButton
                  IconComponent={IconTrashSvg}
                  variant="secondary"
                  onClick={onClickDeleteDiscipline(id)}
                  isLoading={isLoading}
                />
              ),
            },
            {
              key: `${mainKey}-${id}-restore`,
              content: (
                <PrimaryButton
                  IconComponent={IconRotateCcwSvg}
                  variant="secondary"
                  onClick={onClickRestoreDiscipline(id)}
                  isLoading={isLoading}
                />
              ),
            },
          ]}
        />
      ))}

      {!disciplines && <CircularLoader size="24px" width="100%" padding="8px" />}
    </S.Root>
  );
};
