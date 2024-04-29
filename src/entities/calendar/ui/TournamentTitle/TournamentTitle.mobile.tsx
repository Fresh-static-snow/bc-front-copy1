import { ElementRef, forwardRef, memo } from 'react';

import { TextColor } from '@/shared/ui/typography';

import * as S from './TournamentTitle.styles';
import { TournamentTitleProps } from './TournamentTitle.types';

export const TournamentTitleMobile = memo(
  forwardRef<ElementRef<'button'>, TournamentTitleProps>(
    ({ title, color, isVisible = true, onClickTournament }, ref) => (
      <S.RootMobile
        ref={ref}
        onClick={onClickTournament || (() => {})}
        disabled={!onClickTournament}
      >
        <S.TournamentTitleMobile>
          <TextColor text={title} fontWeight="500" secondaryColor={color} />
        </S.TournamentTitleMobile>
      </S.RootMobile>
    ),
  ),
);
