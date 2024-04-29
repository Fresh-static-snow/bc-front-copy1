import { memo } from 'react';

import { BackgroundColor, Badge } from '@/shared/ui/data-display';
import { MarkedText, TextColor } from '@/shared/ui/typography';

import * as S from './InfoTextWithBadge.styles';
import { InfoTextWithBadgeProps } from './InfoTextWithBadge.types';

export const InfoTextWithBadge: React.FC<InfoTextWithBadgeProps> = memo(
  ({
    firstText,
    secondText,
    badgeText,
    color,
    isVisible = true,
    firstTextFilter,
    secondTextFilter,
  }) => (
    <BackgroundColor
      baseColor={color}
      stripes={!isVisible}
      borderWrapper={firstTextFilter || secondTextFilter}
    >
      <S.Root>
        <S.BadgeWrapper>
          <Badge text={badgeText} secondaryColor={color} />
        </S.BadgeWrapper>

        <S.TextList>
          {firstText && (
            <>
              {firstTextFilter ? (
                <MarkedText>{firstText}</MarkedText>
              ) : (
                <TextColor text={firstText} secondaryColor={color} />
              )}
            </>
          )}

          {secondText && (
            <>
              {secondTextFilter ? (
                <MarkedText>{secondText}</MarkedText>
              ) : (
                <TextColor text={secondText} secondaryColor={color} />
              )}
            </>
          )}
        </S.TextList>
      </S.Root>
    </BackgroundColor>
  ),
);
