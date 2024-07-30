import { memo, useCallback, useMemo, useState } from 'react';

import { matchDetailsItemEmpty } from '@/entities/calendar/const';
import { UsersCategoriesInfoTipContent } from '@/entities/calendar/ui/UsersCategoriesInfoTipContent/UsersCategoriesInfoTipContent';
import { Match, MatchCast, Segment } from '@/shared/types/entities.types';
import { InfoTipLayout } from '@/shared/ui/layouts';

import { InfoTextWithBadge } from '../InfoTextWithBadge/InfoTextWithBadge';
import { MatchDetailsItem } from '../MatchDetailsItem/MatchDetailsItem';
import { Time } from '../Time/Time';
import * as S from './MatchItem.styles';
import { MatchItemProps } from './MatchItem.types';

export const MatchItem: React.FC<MatchItemProps> = memo(
  ({ match, filters, color, onClickMatch }) => {
    // * If there are no match details, then we will display an empty match details item.
    const matchDetails = useMemo<MatchCast[]>(
      () => (match?.match_casts?.length > 0 ? match.match_casts : [matchDetailsItemEmpty]),
      [match.match_casts],
    );

    const matchRows = useMemo(
      () => [
        { key: '1', text: match.team_one },
        { key: '2', text: match.team_two },
      ],
      [match],
    );

    const onClickMatchButton = useCallback(() => {
      if (onClickMatch) {
        onClickMatch(match);
      }
    }, [match, onClickMatch]);

    return (
      <S.Root onClick={onClickMatchButton} disabled={!onClickMatch} data-testid="match-root-button">
        <Time startTime={match.start_time} endTime={match.end_time} color={color} />

        <InfoTextWithBadge
          rows={matchRows}
          withBadge
          badgeText={match.format}
          color={color}
          isVisible={match.visible}
        />

        <S.MatchDetailsList>
          {matchDetails?.map((detailsItem) => (
            <MatchDetailsItem
              key={detailsItem.id}
              matchDetails={detailsItem}
              filters={filters}
              color={color}
              isVisible={match.visible}
            />
          ))}
        </S.MatchDetailsList>
      </S.Root>
    );
  },
);
