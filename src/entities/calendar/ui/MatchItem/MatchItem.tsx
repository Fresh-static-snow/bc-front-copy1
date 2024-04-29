import { memo, useCallback, useMemo } from 'react';

import { matchDetailsItemEmpty } from '@/entities/calendar/const';
import { MatchCast } from '@/shared/types/entities.types';

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

    const onClickMatchRoot = useCallback(() => {
      if (onClickMatch) {
        onClickMatch(match);
      }
    }, [match, onClickMatch]);

    return (
      <S.Root onClick={onClickMatchRoot} disabled={!onClickMatch} data-testid="match-root-button">
        <Time startTime={match.start_time} endTime={match.end_time} color={color} />

        <InfoTextWithBadge
          firstText={match.team_one}
          secondText={match.team_two}
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
