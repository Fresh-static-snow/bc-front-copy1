import { useCallback } from 'react';

import { EntityAccordionItem } from '@/entities/management';
import { DeletedMatchList } from '@/entities/match';
import { IconRotateCcwSvg, IconTrashSvg } from '@/shared/assets';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './DeletedTournamentList.styles';
import { DeletedTournamentListProps } from './DeletedTournamentList.types';

export const DeletedTournamentList: React.FC<DeletedTournamentListProps> = ({
  mainKey,
  tournaments,
  isLoading,
  dashedBorder,
  withoutLastChildBorder,
  onDeleteTournament,
  onRestoreTournament,
  onDeleteMatches,
  onRestoreMatches,
}) => {
  const onClickDelete = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDeleteTournament(id);
    },
    [onDeleteTournament],
  );
  const onClickRestore = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onRestoreTournament(id);
    },
    [onRestoreTournament],
  );

  return (
    <>
      {tournaments?.map(({ id, title, matches }, index) => (
        <EntityAccordionItem
          key={`${mainKey}-${id}`}
          disabled={matches?.length === 0}
          startRotationPositionDeg={-90}
          endRotationPositionDeg={90}
          dashedBorder={dashedBorder}
          withoutBorder={withoutLastChildBorder && index === tournaments.length - 1}
          title={title}
          content={
            <S.MatchListWrapper>
              <DeletedMatchList
                mainKey={`${mainKey}-${id}-matches`}
                matches={matches}
                isLoading={isLoading}
                onDelete={onDeleteMatches}
                onRestore={onRestoreMatches}
              />
            </S.MatchListWrapper>
          }
          elementsList={[
            {
              key: `${mainKey}-${id}-delete`,
              content: onDeleteTournament ? (
                <PrimaryButton
                  IconComponent={IconTrashSvg}
                  variant="secondary"
                  onClick={onClickDelete(id)}
                  isLoading={isLoading}
                />
              ) : null,
            },
            {
              key: `${mainKey}-${id}-restore`,
              content: onRestoreTournament ? (
                <PrimaryButton
                  IconComponent={IconRotateCcwSvg}
                  variant="secondary"
                  onClick={onClickRestore(id)}
                  isLoading={isLoading}
                />
              ) : null,
            },
          ]}
        />
      ))}

      {!tournaments && <CircularLoader size="24px" width="100%" padding="8px" />}
    </>
  );
};
