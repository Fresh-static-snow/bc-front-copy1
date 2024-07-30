import { Fragment, memo, useCallback, useMemo, useState } from 'react';

import { Match, Segment } from '@/shared/types/entities.types';
import { BackgroundColor } from '@/shared/ui/data-display';
import { MarkedText, TextColor } from '@/shared/ui/typography';

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

      const elements = [
        { item: matchDetails?.studio, filter: filters?.studio },
        { item: matchDetails?.analytic_studio, filter: filters?.analytics },
        { item: matchDetails?.setup, filter: filters?.setup },
      ].filter(({ item }) => Boolean(item?.id));

      return {
        length: lang.length + elements.map((e) => e.item.name).join().length,
        lang,
        elements,
      };
    }, [
      filters?.analytics,
      filters?.setup,
      filters?.studio,
      matchDetails?.analytic_studio,
      matchDetails?.language?.keyword,
      matchDetails?.setup,
      matchDetails?.studio,
    ]);

    const channelsText = useMemo(() => {
      const channels = matchDetails?.channels?.map((channel) => channel.name);
      const stream = matchDetails?.stream?.name;
      const result = [...channels, stream].filter(Boolean);

      return result?.length ? result.join(', ') : '---';
    }, [matchDetails?.channels, matchDetails?.stream?.name]);

    const commentators: CalendarPerson[] = useMemo(() => {
      const filteredCommentators =
        matchDetails.commentators?.filter(
          (commentator) =>
            !matchDetails?.backup_commentators?.find((backup) => backup.id === commentator.id),
        ) || [];

      const backupCommentators = matchDetails.backup_commentators?.map((backupCommentator) => ({
        ...backupCommentator,
        additionalBorder: true,
        additionalText: '[backup]',
      }));

      return backupCommentators?.length > 0
        ? [...filteredCommentators, ...backupCommentators]
        : filteredCommentators;
    }, [matchDetails.backup_commentators, matchDetails.commentators]);

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
        commentators,
        analytics,
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
          discipline={{ item: discipline, filterList: filters?.game_discipline }}
          eventName={tournament?.title}
          title={match?.type === 'Segment' ? (match as Segment)?.title : null}
          teamOne={match?.type === 'Match' ? (match as Match)?.team_one : null}
          teamTwo={match?.type === 'Match' ? (match as Match)?.team_two : null}
          date={match?.start_date}
          time={`${match?.start_time ?? ''}${match?.end_time ? ` - ${match?.end_time}` : ''}`}
          location={
            <>
              {studioTitle?.length && (
                <div>
                  <strong style={{ fontWeight: 700 }}>{studioTitle.lang}</strong>

                  {studioTitle?.elements?.map((element, index) => (
                    <Fragment key={`${element.item?.id ?? ''}${element.item?.name ?? ''}` ?? index}>
                      {element.filter?.includes(String(element.item?.id)) ? (
                        <MarkedText>{element.item?.name}</MarkedText>
                      ) : (
                        element.item?.name
                      )}

                      {studioTitle.elements.length - 1 !== index && ' | '}
                    </Fragment>
                  ))}
                </div>
              )}
            </>
          }
          format={match?.type === 'Match' ? (match as Match)?.format : null}
          channels={{ items: matchDetails?.channels, filterList: filters?.channel }}
          streams={{ items: [matchDetails?.stream], filterList: filters?.stream }}
          mainParticipant={{
            item: tournament?.main_participants?.[0],
            filterList: filters?.main_participants,
          }}
          mediaRepresentative={{
            item: tournament?.media_representatives?.[0],
            filterList: filters?.media_representatives,
          }}
          commentators={{ items: infoCommentators, filterList: filters?.commentators }}
          analytics={{ items: infoAnalytics, filterList: filters?.analytics }}
          staff={{ items: matchDetails?.staff_members, filterList: filters?.staff_members }}
          onClickEdit={onEditMatch ? onClickEditButton : null}
        />

        <BackgroundColor borderRadius={false} baseColor={color} stripes={!isVisible}>
          <S.RootMobile onClick={() => onChangeInfoDrawer(true)}>
            <S.TimeWrapperMobile id="tournament-match-time">
              <Time
                startTime={match?.start_time ?? ''}
                endTime={match?.end_time ?? ''}
                color={color}
              />
            </S.TimeWrapperMobile>

            <S.DetailsWrapperMobile>
              <S.DetailWrapperMobile $alignItems="start">
                <TextColor
                  text={
                    <>
                      {studioTitle?.length ? (
                        <div>
                          <strong style={{ fontWeight: 700 }}>{studioTitle.lang}</strong>

                          {studioTitle?.elements?.map((element, index) => (
                            <Fragment
                              key={`${element.item?.id ?? ''}${element.item?.name ?? ''}` ?? index}
                            >
                              {element.item?.name}
                              {studioTitle.elements.length - 1 !== index && ' • '}
                            </Fragment>
                          ))}
                        </div>
                      ) : (
                        '---'
                      )}
                    </>
                  }
                  fontWeight="400"
                  secondaryColor={color}
                />
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
