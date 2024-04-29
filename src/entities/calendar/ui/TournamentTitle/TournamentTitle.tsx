import { memo } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import * as S from './TournamentTitle.styles';
import { TournamentTitleProps } from './TournamentTitle.types';

export const TournamentTitle: React.FC<TournamentTitleProps> = memo(
  ({ title, color, isVisible = true, onClickTournament }) => (
    <S.Root onClick={onClickTournament || (() => {})} disabled={!onClickTournament}>
      <BackgroundColor baseColor={color} colorIndicator stripes={!isVisible}>
        <S.TournamentTitle>
          <TextColor text={title} fontWeight="500" secondaryColor={color} />
        </S.TournamentTitle>
      </BackgroundColor>
    </S.Root>
  ),
);
