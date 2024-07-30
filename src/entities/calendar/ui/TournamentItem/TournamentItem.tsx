import { useTheme } from '@emotion/react';
import { Fragment, memo, useCallback, useMemo } from 'react';

import { matchItemEmpty } from '@/entities/calendar/const';
import { Match, Segment } from '@/shared/types/entities.types';
import { InfoTipLayout } from '@/shared/ui/layouts';

import { MatchItem } from '../MatchItem/MatchItem';
import { PeopleInfo } from '../PeopleInfo/PeopleInfo';
import { SegmentItem } from '../SegmentItem/SegmentItem';
import { TournamentTitle } from '../TournamentTitle/TournamentTitle';
import { UsersCategoriesInfoTipContent } from '../UsersCategoriesInfoTipContent/UsersCategoriesInfoTipContent';
import * as S from './TournamentItem.styles';
import { TournamentItemProps } from './TournamentItem.types';

export const TournamentItem: React.FC<TournamentItemProps> = memo(
  ({ discipline, tournament, filters, onClickTournament, onClickMatch }) => {
    const theme = useTheme();
    const color = useMemo(
      () => tournament.ui_template?.primary || theme.appColors.palette_01,
      [theme.appColors.palette_01, tournament.ui_template?.primary],
    );

    // * If there are no matches in the tournament, then we add an empty match.
    const tournamentMatches = useMemo(
      () => (tournament?.matches?.length > 0 ? tournament.matches : [matchItemEmpty]),
      [tournament.matches],
    );

    const users = useMemo(() => {
      const mainParticipants =
        tournament.main_participants?.length > 0
          ? {
              category: 'Main participants',
              people: tournament.main_participants,
              filter: filters?.main_participants,
            }
          : null;
      const mediaRepresentatives =
        tournament.media_representatives?.length > 0
          ? {
              category: 'Media representatives',
              people: tournament.media_representatives,
              filter: filters?.media_representatives,
            }
          : null;

      return [mainParticipants, mediaRepresentatives];
    }, [
      filters?.main_participants,
      filters?.media_representatives,
      tournament.main_participants,
      tournament.media_representatives,
    ]);

    const onClickTournamentTitle = useCallback(() => {
      if (onClickTournament) {
        onClickTournament(tournament);
      }
    }, [onClickTournament, tournament]);

    return (
      <S.Root>
        <TournamentTitle
          title={tournament.title}
          color={color}
          isVisible={tournament.visible}
          onClickTournament={onClickTournament ? onClickTournamentTitle : null}
        />

        <S.MatchList>
          {tournamentMatches?.map((match) => (
            <Fragment key={match.id}>
              {match.type === 'Match' && (
                <MatchItem
                  match={match as Match}
                  color={color}
                  filters={filters}
                  onClickMatch={onClickMatch}
                />
              )}
              {match.type === 'Segment' && (
                <SegmentItem
                  discipline={discipline}
                  tournament={tournament}
                  segment={match as Segment}
                  color={color}
                  filters={filters}
                  onClickSegment={onClickMatch}
                />
              )}
            </Fragment>
          ))}
        </S.MatchList>

        <InfoTipLayout
          InfoTipContent={<UsersCategoriesInfoTipContent color={color} users={users} />}
          color={color}
          isVisible={tournament.visible}
          disabled={!(users?.[0] || users?.[1])}
        >
          <div>
            <PeopleInfo
              color={color}
              isVisible={tournament.visible}
              rows
              mainPeople={tournament.main_participants}
              secondaryPeople={tournament.media_representatives}
              mainFilterList={filters?.main_participants}
              secondaryFilterList={filters?.media_representatives}
            />
          </div>
        </InfoTipLayout>
      </S.Root>
    );
  },
);
