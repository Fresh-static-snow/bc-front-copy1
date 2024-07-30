import { memo, useMemo } from 'react';

import { InfoTipLayout } from '@/shared/ui/layouts';

import { CalendarPerson } from '../../types';
import { InfoText } from '../InfoText/InfoText';
import { InfoTextWithBadge } from '../InfoTextWithBadge/InfoTextWithBadge';
import { PeopleInfo } from '../PeopleInfo/PeopleInfo';
import { UsersCategoriesInfoTipContent } from '../UsersCategoriesInfoTipContent/UsersCategoriesInfoTipContent';
import { UsersInfoTipContent } from '../UsersInfoTipContent/UsersInfoTipContent';
import * as S from './MatchDetailsItem.styles';
import { MatchCastsItemProps } from './MatchDetailsItem.types';

export const MatchDetailsItem: React.FC<MatchCastsItemProps> = memo(
  ({ matchDetails, filters, color, isVisible = true }) => {
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

    const users = useMemo(() => {
      const commentatorList =
        commentators?.length > 0
          ? {
              category: 'Casters',
              people: commentators,
              filter: filters?.commentators,
            }
          : null;
      const analyticList =
        analytics?.length > 0
          ? {
              category: 'Analysts',
              people: analytics,
              filter: filters?.analytics,
            }
          : null;

      return [commentatorList, analyticList];
    }, [commentators, filters?.commentators, filters?.analytics, analytics]);

    const channelList = useMemo(() => {
      const channels = matchDetails?.channels?.map((channel) =>
        filters?.channel?.includes(String(channel.id)) ? { ...channel, marked: true } : channel,
      );
      const stream = {
        ...matchDetails?.stream,
        marked: filters?.stream?.includes(String(matchDetails?.stream?.id)),
      };

      return stream.name ? [...channels, stream] : channels;
    }, [filters?.channel, filters?.stream, matchDetails?.channels, matchDetails?.stream]);

    const studioRows = useMemo(
      () => [
        {
          text: matchDetails?.studio?.name,
          filter: filters?.studio?.includes(String(matchDetails?.studio?.id)),
        },
        {
          text: matchDetails?.analytic_studio?.name,
          filter: filters?.analytic_studio?.includes(String(matchDetails?.analytic_studio?.id)),
        },
        {
          text: matchDetails?.setup?.name,
          filter: filters?.setup?.includes(String(matchDetails?.setup?.id)),
        },
      ],
      [
        matchDetails?.studio,
        matchDetails?.analytic_studio,
        matchDetails?.setup,
        filters?.studio,
        filters?.analytic_studio,
        filters?.setup,
      ],
    );

    return (
      <S.Root>
        <InfoTextWithBadge
          rows={studioRows}
          badgeText={matchDetails?.language?.keyword}
          color={color}
          isVisible={isVisible}
        />

        <InfoTipLayout
          InfoTipContent={<UsersCategoriesInfoTipContent color={color} users={users} />}
          color={color}
          isVisible={isVisible}
          disabled={!(users?.[0] || users?.[1])}
        >
          <div>
            <PeopleInfo
              color={color}
              isVisible={isVisible}
              rows
              mainPeople={commentators}
              secondaryPeople={analytics}
              mainFilterList={filters?.commentators}
              secondaryFilterList={filters?.analytics}
            />
          </div>
        </InfoTipLayout>

        <InfoTipLayout
          InfoTipContent={
            <UsersInfoTipContent
              color={color}
              users={matchDetails.staff_members}
              filterList={filters?.staff_members}
            />
          }
          color={color}
          isVisible={isVisible}
          disabled={!matchDetails.staff_members?.length}
        >
          <div>
            <PeopleInfo
              color={color}
              isVisible={isVisible}
              mainPeople={matchDetails.staff_members}
              mainFilterList={filters?.staff_members}
            />
          </div>
        </InfoTipLayout>

        <InfoText itemList={channelList} color={color} isVisible={isVisible} />
      </S.Root>
    );
  },
);
