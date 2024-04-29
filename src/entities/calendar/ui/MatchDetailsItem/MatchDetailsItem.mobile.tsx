import { memo, useCallback, useMemo, useState } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import { CalendarPerson } from '../../types';
import { InfoDrawer } from '../InfoDrawer/InfoDrawer';
import { PeopleInfoMobile } from '../PeopleInfo/PeopleInfo.mobile';
import { Time } from '../Time/Time';
import * as S from './MatchDetailsItem.styles';
import { MatchCastsItemMobileProps } from './MatchDetailsItem.types';

export const MatchDetailsItemMobile: React.FC<MatchCastsItemMobileProps> = memo(
  ({
    discipline,
    tournament,
    match,
    matchDetails,
    filters,
    color,
    isVisible = true,
    onEditMatch,
  }) => {
    const [isOpenInfoDrawer, setOpenInfoDrawer] = useState(false);

    const studioTitle = useMemo(() => {
      const lang = matchDetails?.language?.keyword
        ? `${matchDetails?.language?.keyword.toUpperCase()}: `
        : '';

      const studioName = matchDetails?.studio?.name?.length ? matchDetails?.studio?.name : '';
      const point =
        !!matchDetails?.studio?.name?.length && !!matchDetails?.analytic_studio?.name?.length
          ? ' • '
          : '';
      const analyticStudioName = matchDetails?.analytic_studio?.name?.length
        ? matchDetails?.analytic_studio?.name
        : '';

      const title = `${lang}${studioName}${point}${analyticStudioName}`;

      return title?.length ? (
        <div>
          <strong style={{ fontWeight: 700 }}>{lang}</strong>
          {studioName}
          {point}
          {analyticStudioName}
        </div>
      ) : (
        '---'
      );
    }, [
      matchDetails?.studio?.name,
      matchDetails?.language?.keyword,
      matchDetails?.analytic_studio?.name,
    ]);

    const channelsText = useMemo(() => {
      const channels = matchDetails?.channels?.map((channel) => channel.name);
      return channels?.length ? channels.join(', ') : '---';
    }, [matchDetails?.channels]);

    const commentators: CalendarPerson[] = useMemo(() => {
      const filteredCommentators =
        matchDetails.commentators?.filter(
          (commentator) => commentator.id !== matchDetails.backup_commentator?.id,
        ) || [];

      const backupCommentator = matchDetails.backup_commentator
        ? {
            ...matchDetails.backup_commentator,
            additionalBorder: true,
            additionalText: '[backup]',
          }
        : null;

      return backupCommentator
        ? [...filteredCommentators, backupCommentator]
        : filteredCommentators;
    }, [matchDetails.backup_commentator, matchDetails.commentators]);

    const analytics: CalendarPerson[] = useMemo(() => {
      const filteredAnalytics =
        matchDetails.analytics?.filter(
          (analytic) => analytic.id !== matchDetails.host_analytic?.id,
        ) || [];

      const hostAnalytic = matchDetails.host_analytic
        ? {
            ...matchDetails.host_analytic,
            crownIcon: true,
            additionalText: '[host]',
          }
        : null;

      return hostAnalytic ? [hostAnalytic, ...filteredAnalytics] : filteredAnalytics;
    }, [matchDetails.analytics, matchDetails.host_analytic]);

    const peopleList = useMemo(() => {
      const sources = [
        tournament?.main_participants,
        tournament?.media_representatives,
        analytics,
        commentators,
        matchDetails?.staff_members,
      ];

      const mergedArray: CalendarPerson[] = sources.filter(Boolean).flatMap((source) => source);

      const uniquePeopleList: CalendarPerson[] = mergedArray.reduce(
        (accumulator: CalendarPerson[], currentPerson: CalendarPerson) => {
          const existingPersonIndex: number = accumulator.findIndex(
            (person) => person.id === currentPerson.id,
          );
          if (existingPersonIndex === -1) {
            accumulator.push(currentPerson);
          } else {
            const updatedPerson = {
              ...accumulator[existingPersonIndex],
              additionalBorder:
                currentPerson.additionalBorder || accumulator[existingPersonIndex].additionalBorder,
              crownIcon: currentPerson.crownIcon || accumulator[existingPersonIndex].crownIcon,
              additionalText:
                currentPerson.additionalText || accumulator[existingPersonIndex].additionalText,
            };
            return [
              ...accumulator.slice(0, existingPersonIndex),
              updatedPerson,
              ...accumulator.slice(existingPersonIndex + 1),
            ];
          }
          return accumulator;
        },
        [] as CalendarPerson[],
      );

      return uniquePeopleList;
    }, [
      tournament?.main_participants,
      tournament?.media_representatives,
      analytics,
      commentators,
      matchDetails?.staff_members,
    ]);

    const infoCommentators = useMemo(
      () =>
        commentators?.map(
          ({
            id,
            avatar,
            display_name,
            nick,
            first_name,
            last_name,
            additionalBorder,
            crownIcon,
            additionalText,
          }) => ({
            id,
            name: display_name,
            nick,
            firstName: first_name,
            lastName: last_name,
            image: avatar?.url,
            additionalBorder,
            crownIcon,
            additionalText,
          }),
        ) ?? [],
      [commentators],
    );

    const infoAnalytics = useMemo(
      () =>
        analytics?.map(
          ({
            id,
            avatar,
            display_name,
            nick,
            first_name,
            last_name,
            additionalBorder,
            crownIcon,
            additionalText,
          }) => ({
            id,
            name: display_name,
            nick,
            firstName: first_name,
            lastName: last_name,
            image: avatar?.url,
            additionalBorder,
            crownIcon,
            additionalText,
          }),
        ) ?? [],
      [analytics],
    );

    const filterList: string[] = useMemo(() => {
      const mergedArray: string[] = [];
      const requiredFilters = [
        'main_participants',
        'media_representatives',
        'commentators',
        'analytics',
        'staff_members',
      ];

      requiredFilters.forEach((filterKey) => {
        if (filters?.[filterKey]?.length) {
          mergedArray.push(...filters[filterKey]);
        }
      });

      const uniqueFilterList: string[] = Array.from(new Set(mergedArray));

      return uniqueFilterList;
    }, [filters]);

    const onChangeInfoDrawer = (status: boolean) => {
      setOpenInfoDrawer(status);
    };

    const onClickEditButton = useCallback(() => {
      if (onEditMatch) {
        onEditMatch(match);
        setOpenInfoDrawer(false);
      }
    }, [match, onEditMatch]);

    return (
      <>
        <InfoDrawer
          isOpen={isOpenInfoDrawer}
          setOpen={onChangeInfoDrawer}
          isVisible={match?.visible}
          color={color}
          discipline={discipline}
          eventName={tournament?.title}
          teamOne={match?.team_one}
          teamTwo={match?.team_two}
          date={match?.start_date}
          time={`${match?.start_time ?? ''}${match?.end_time ? ` - ${match?.end_time}` : ''}`}
          location={
            <>
              <strong style={{ fontWeight: 700 }}>
                {matchDetails?.language?.keyword
                  ? matchDetails?.language?.keyword?.toUpperCase()
                  : ''}
              </strong>
              {matchDetails?.language?.keyword &&
              (matchDetails?.studio?.name || matchDetails?.analytic_studio?.name)
                ? ': '
                : ''}
              {matchDetails?.studio?.name ?? ''}
              {matchDetails?.studio?.name && matchDetails?.analytic_studio?.name ? ' | ' : ''}
              {matchDetails?.analytic_studio?.name ?? ''}
            </>
          }
          format={match?.format}
          channels={matchDetails?.channels}
          mainParticipant={tournament?.main_participants?.[0]}
          mediaRepresentative={tournament?.media_representatives?.[0]}
          commentators={infoCommentators}
          analytics={infoAnalytics}
          staff={matchDetails?.staff_members}
          disciplineFilterList={filters?.game_discipline}
          commentatorsFilterList={filters?.commentators ?? []}
          analyticsFilterList={filters?.analytics ?? []}
          staffFilterList={filters?.staff_members ?? []}
          mainParticipantFilterList={filters?.main_participants}
          mediaRepresentativeFilterList={filters?.media_representatives}
          channelFilterList={filters?.channel}
          onClickEdit={onEditMatch ? onClickEditButton : null}
        />

        <BackgroundColor borderRadius={false} baseColor={color} stripes={!isVisible}>
          <S.RootMobile onClick={() => onChangeInfoDrawer(true)}>
            <S.TimeWrapperMobile id="tournament-match-time">
              <Time startTime={match.start_time} endTime={match.end_time} color={color} />
            </S.TimeWrapperMobile>

            <S.DetailsWrapperMobile>
              <S.DetailWrapperMobile $alignItems="start">
                <TextColor text={studioTitle} fontWeight="400" secondaryColor={color} />
              </S.DetailWrapperMobile>

              <S.DetailWrapperMobile>
                <PeopleInfoMobile
                  color={color}
                  isVisible={isVisible}
                  peopleList={peopleList}
                  filterList={filterList}
                />
              </S.DetailWrapperMobile>

              <S.DetailWrapperMobile $alignItems="end">
                <TextColor text={channelsText} fontWeight="400" secondaryColor={color} />
              </S.DetailWrapperMobile>
            </S.DetailsWrapperMobile>
          </S.RootMobile>
        </BackgroundColor>
      </>
    );
  },
);
