import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { memo, useCallback, useMemo } from 'react';

import { ScheduleParticipant } from '@/entities/calendar/types';
import { UserInCalendarEntity } from '@/shared/types/entities.types';
import { BackgroundColor } from '@/shared/ui/data-display';
import { InfoTipLayout } from '@/shared/ui/layouts';
import { TextColor } from '@/shared/ui/typography';

import { FullInfoTipContent } from '../FullInfoTipContent/FullInfoTipContent';
import { UsersRow } from '../UsersRow/UsersRow';
import * as S from './TournamentRangeItem.styles';
import { TournamentRangeItemProps } from './TournamentRangeItem.types';

export const TournamentRangeItem: React.FC<TournamentRangeItemProps> = memo(
  ({ periodLength, tournament, discipline, withParticipants, filters, onClickTournament }) => {
    const theme = useTheme();
    const color = useMemo(
      () => tournament.ui_template?.primary || theme.appColors.palette_01,
      [theme.appColors.palette_01, tournament.ui_template?.primary],
    );

    const commentators = useMemo(() => {
      const commentatorMap = new Map();

      const addCommentators = (people: UserInCalendarEntity[]) => {
        people?.forEach(({ id, avatar, display_name, nick, first_name, last_name }) => {
          if (!commentatorMap.has(id)) {
            commentatorMap.set(id, {
              id,
              name: display_name,
              nick,
              firstName: first_name,
              lastName: last_name,
              image: avatar?.url,
            });
          }
        });
      };

      const addBackupCommentators = (people: UserInCalendarEntity[]) => {
        people?.forEach(({ id, avatar, display_name, nick, first_name, last_name }) => {
          if (!commentatorMap.has(id)) {
            commentatorMap.set(id, {
              id,
              name: display_name,
              nick,
              firstName: first_name,
              lastName: last_name,
              image: avatar?.url,
            });
          }
        });
      };

      addCommentators(tournament?.commentators);
      addBackupCommentators(tournament?.backup_commentators);

      return Array.from<ScheduleParticipant>(commentatorMap.values());
    }, [tournament?.backup_commentators, tournament?.commentators]);

    const analytics = useMemo(() => {
      const analyticsMap = new Map();

      const addAnalytics = (people: UserInCalendarEntity[]) => {
        people?.forEach(({ id, avatar, display_name, nick, first_name, last_name }) => {
          if (!analyticsMap.has(id)) {
            analyticsMap.set(id, {
              id,
              name: display_name,
              nick,
              firstName: first_name,
              lastName: last_name,
              image: avatar?.url,
            });
          }
        });
      };

      const addHostAnalytics = (people: UserInCalendarEntity[]) => {
        people?.forEach(({ id, avatar, display_name, nick, first_name, last_name }) => {
          if (!analyticsMap.has(id)) {
            analyticsMap.set(id, {
              id,
              name: display_name,
              nick,
              firstName: first_name,
              lastName: last_name,
              image: avatar?.url,
            });
          }
        });
      };

      addHostAnalytics(tournament?.host_analytics);
      addAnalytics(tournament?.analytics);

      return Array.from<ScheduleParticipant>(analyticsMap.values());
    }, [tournament?.analytics, tournament?.host_analytics]);

    // * Filter out duplicate participants based on their id
    const participants = [...analytics, ...commentators].reduce(
      (acc: ScheduleParticipant[], participant) => {
        if (!acc.some((p) => p.id === participant.id)) {
          acc.push(participant);
        }
        return acc;
      },
      [],
    );

    const eventDate = useMemo(
      () =>
        `${tournament?.start_date ? dayjs(tournament?.start_date).format('DD MMM') : ''}${
          tournament?.end_date && tournament?.start_date !== tournament?.end_date
            ? ` - ${dayjs(tournament?.end_date).format('DD MMM')}`
            : ''
        }`,
      [tournament?.end_date, tournament?.start_date],
    );

    const onClickTournamentTitle = useCallback(() => {
      if (onClickTournament) {
        onClickTournament(tournament);
      }
    }, [onClickTournament, tournament]);

    return (
      <InfoTipLayout
        InfoTipContent={
          <FullInfoTipContent
            color={color}
            discipline={discipline}
            eventName={tournament?.title}
            startDate={tournament?.start_date}
            endDate={tournament?.end_date}
            tier={tournament?.tier}
            channels={tournament?.channels}
            mainParticipant={tournament?.main_participants?.[0]}
            mediaRepresentative={tournament?.media_representatives?.[0]}
            commentators={commentators}
            analytics={analytics}
            disciplineFilterList={filters?.game_discipline}
            commentatorsFilterList={filters?.commentators ?? []}
            analyticsFilterList={filters?.analytics ?? []}
            mainParticipantFilterList={filters?.main_participants}
            mediaRepresentativeFilterList={filters?.media_representatives}
            channelFilterList={filters?.channel}
          />
        }
        color={color}
        isVisible={tournament.visible}
      >
        <S.TournamentWrapper $periodLength={periodLength || 1}>
          <S.Tournament
            onClick={onClickTournament ? onClickTournamentTitle : () => {}}
            disabled={!onClickTournament}
          >
            <BackgroundColor baseColor={color} colorIndicator stripes={!tournament.visible}>
              <S.TournamentContent>
                <TextColor
                  secondaryColor={color}
                  text={tournament.title}
                  fontWeight="500"
                  limitedWidth
                />

                <S.TournamentContentBottom>
                  <TextColor secondaryColor={color} text={eventDate} fontSize="10px" limitedWidth />

                  <UsersRow
                    color={color}
                    mainParticipant={tournament.main_participants?.[0]}
                    participants={participants}
                    withParticipants={withParticipants}
                  />
                </S.TournamentContentBottom>
              </S.TournamentContent>
            </BackgroundColor>
          </S.Tournament>
        </S.TournamentWrapper>
      </InfoTipLayout>
    );
  },
);
