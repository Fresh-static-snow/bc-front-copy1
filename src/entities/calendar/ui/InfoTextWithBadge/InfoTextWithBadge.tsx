import { Fragment, memo } from 'react';

import { BackgroundColor, Badge } from '@/shared/ui/data-display';
import { MarkedText, TextColor } from '@/shared/ui/typography';

import * as S from './InfoTextWithBadge.styles';
import { InfoTextWithBadgeProps } from './InfoTextWithBadge.types';

export const InfoTextWithBadge: React.FC<InfoTextWithBadgeProps> = memo(
  ({ rows, withBadge = true, badgeText, color, isVisible = true }) => (
    <BackgroundColor
      baseColor={color}
      stripes={!isVisible}
      borderWrapper={!!rows?.find((row) => row.filter)}
    >
      <S.Root>
        <S.Space />

        {withBadge && (
          <>
            <div>
              <Badge text={badgeText} secondaryColor={color} />
            </div>
            <S.Space />
          </>
        )}

        <S.TextList>
          {rows?.map(({ key, text, filter }, index) => (
            <Fragment key={key ?? text ?? index}>
              {text && (
                <>
                  {filter ? (
                    <MarkedText>{text}</MarkedText>
                  ) : (
                    <TextColor text={text} secondaryColor={color} />
                  )}
                </>
              )}
            </Fragment>
          ))}
        </S.TextList>
      </S.Root>
    </BackgroundColor>
  ),
);
