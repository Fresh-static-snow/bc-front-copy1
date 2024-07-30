import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { memo, useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { matchDetailsItemEmpty } from '@/entities/calendar/const';
import { SegmentInfoTipContent } from '@/entities/calendar/ui/SegmentInfoTipContent/SegmentInfoTipContent';
import { MatchCast } from '@/shared/types/entities.types';
import { InfoTipLayout } from '@/shared/ui/layouts';

import { InfoTextWithBadge } from '../InfoTextWithBadge/InfoTextWithBadge';
import { MatchDetailsItem } from '../MatchDetailsItem/MatchDetailsItem';
import { Time } from '../Time/Time';
import * as S from './SegmentItem.styles';
import { SegmentItemProps } from './SegmentItem.types';

export const SegmentItem: React.FC<SegmentItemProps> = memo(
  ({ discipline, tournament, segment, filters, color, onClickSegment }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isTooltipOpen, setTooltipOpen] = useState(false);

    // * If there are no segment details, then we will display an empty segment details item.
    const segmentDetails = useMemo<MatchCast[]>(
      () => (segment?.match_casts?.length > 0 ? segment.match_casts : [matchDetailsItemEmpty]),
      [segment.match_casts],
    );

    const rows = useMemo(() => [{ text: segment.title }], [segment]);

    const onOpenTooltip = useCallback(() => {
      setTooltipOpen(true);
    }, []);

    const onCloseTooltip = useCallback(() => {
      setTooltipOpen(false);
    }, []);

    const onClickSegmentButton = useCallback(() => {
      if (onClickSegment) {
        onClickSegment(segment);
        onCloseTooltip();
      }
    }, [segment, onClickSegment]);

    const onClickView = useCallback(() => {
      navigate(`/calendar/segment/${segment.id}/main`, {
        state: { prevPath: location.pathname + location.search },
      });
    }, [location.pathname, location.search, navigate]);

    return (
      <S.Root data-testid="segment-root-button">
        <Time startTime={segment.start_time} endTime={segment.end_time} color={color} />

        <InfoTipLayout
          open={isTooltipOpen}
          InfoTipContent={
            <ClickAwayListener onClickAway={onCloseTooltip}>
              <div>
                <SegmentInfoTipContent
                  discipline={discipline}
                  eventName={tournament?.title}
                  title={segment.title}
                  color={color}
                  guests={segment.guests}
                  date={segment?.start_date}
                  time={`${segment?.start_time ?? ''}${
                    segment?.end_time ? ` - ${segment?.end_time}` : ''
                  }`}
                  onClickEdit={onClickSegmentButton}
                  onClickView={onClickView}
                />
              </div>
            </ClickAwayListener>
          }
          color={color}
          isVisible={segment.visible}
          followCursor={false}
          arrow
          placement="right"
          disabled={segment.type !== 'Segment'}
        >
          <S.TooltipOpener onClick={onOpenTooltip}>
            <InfoTextWithBadge
              rows={rows}
              withBadge={false}
              color={color}
              isVisible={segment.visible}
            />
          </S.TooltipOpener>
        </InfoTipLayout>

        <S.MatchDetailsList>
          {segmentDetails?.map((detailsItem) => (
            <MatchDetailsItem
              key={detailsItem.id}
              matchDetails={detailsItem}
              filters={filters}
              color={color}
              isVisible={segment.visible}
            />
          ))}
        </S.MatchDetailsList>
      </S.Root>
    );
  },
);
