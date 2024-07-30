import { ElementRef, forwardRef, memo, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { matchDetailsItemEmpty } from '@/entities/calendar/const';
import { Match, MatchCast, Segment } from '@/shared/types/entities.types';
import { BackgroundColor, Badge } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import { MatchDetailsItemMobile } from '../MatchDetailsItem/MatchDetailsItem.mobile';
import * as S from './MatchItem.styles';
import { MatchItemMobileProps } from './MatchItem.types';

export const MatchItemMobile = memo(
  forwardRef<ElementRef<'li'>, MatchItemMobileProps>(
    ({ discipline, tournament, match, filters, color, onClickMatch }, ref) => {
      // * If there are no match details, then we will display an empty match details item.
      const matchDetails = useMemo<MatchCast[]>(
        () => (match?.match_casts?.length > 0 ? match.match_casts : [matchDetailsItemEmpty]),
        [match.match_casts],
      );

      const teamsRef = useRef<ElementRef<'div'>>();
      const [teamsOverflow, setTeamsOverflow] = useState(false);

      useLayoutEffect(() => {
        const element = teamsRef.current;
        const hasOverflow = element.scrollWidth > element.clientWidth;

        if (hasOverflow) {
          setTeamsOverflow(true);
        }
      }, [teamsRef]);

      return (
        <S.RootMobile ref={ref}>
          <BackgroundColor
            baseColor={color}
            stripes={false}
            borderRadius={false}
            customStyles={{ height: 30 }}
          />
          <BackgroundColor baseColor={color} borderRadius={false}>
            <S.TitleHeaderMobile>
              <S.TitleHeaderTextMobile
                ref={teamsRef}
                style={{ overflow: teamsOverflow ? 'hidden' : 'initial' }}
              >
                {match?.type === 'Match' && (
                  <>
                    <TextColor
                      secondaryColor={color}
                      fontWeight="500"
                      text={(match as Match).team_one}
                    />
                    <TextColor secondaryColor={color} fontWeight="500" text="vs" />
                    <TextColor
                      secondaryColor={color}
                      fontWeight="500"
                      text={(match as Match).team_two}
                    />
                  </>
                )}

                {match?.type === 'Segment' && (
                  <TextColor
                    secondaryColor={color}
                    fontWeight="500"
                    text={(match as Segment).title}
                  />
                )}

                {teamsOverflow && <S.TextFade />}
              </S.TitleHeaderTextMobile>

              {match?.type === 'Match' && (
                <S.BadgeWrapper>
                  <Badge text={(match as Match).format} secondaryColor={color} rotateDeg={0} />
                </S.BadgeWrapper>
              )}
            </S.TitleHeaderMobile>
          </BackgroundColor>

          <S.MatchDetailsListMobile>
            {matchDetails?.map((detailsItem) => (
              <MatchDetailsItemMobile
                key={detailsItem.id}
                discipline={discipline}
                tournament={tournament}
                match={match}
                matchDetails={detailsItem}
                filters={filters}
                color={color}
                isVisible={match.visible}
                onEditMatch={onClickMatch}
              />
            ))}
          </S.MatchDetailsListMobile>
          <BackgroundColor customStyles={{ height: 30 }} baseColor={color} borderRadius={false} />
        </S.RootMobile>
      );
    },
  ),
);
