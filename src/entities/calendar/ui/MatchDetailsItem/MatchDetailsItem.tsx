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

    const users = useMemo(() => {
      const commentatorList =
        commentators?.length > 0
          ? {
              category: 'Commentators',
              people: commentators,
              filter: filters?.commentators,
            }
          : null;
      const analyticList =
        analytics?.length > 0
          ? {
              category: 'Analytics',
              people: analytics,
              filter: filters?.analytics,
            }
          : null;

      return [commentatorList, analyticList];
    }, [commentators, filters?.commentators, filters?.analytics, analytics]);

    const channelList = useMemo(
      () => matchDetails?.channels?.map((channel) => channel.name),
      [matchDetails?.channels],
    );

    const markedChannels = useMemo(
      () => filters?.channel?.map((channel) => channel),
      [filters?.channel],
    );

    return (
      <S.Root>
        <InfoTextWithBadge
          firstText={matchDetails?.studio?.name}
          secondText={matchDetails?.analytic_studio?.name}
          badgeText={matchDetails?.language?.keyword}
          color={color}
          isVisible={isVisible}
          firstTextFilter={filters?.studio?.includes(String(matchDetails?.studio?.id))}
          secondTextFilter={filters?.analytic_studio?.includes(
            String(matchDetails?.analytic_studio?.id),
          )}
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

        <InfoText
          textList={channelList}
          color={color}
          isVisible={isVisible}
          markedItems={markedChannels}
        />
      </S.Root>
    );
  },
);
