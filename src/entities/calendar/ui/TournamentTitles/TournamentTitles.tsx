import { memo } from 'react';

import { scheduleTitles } from '@/entities/calendar/const';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import { MatchTitles } from '../MatchTitles/MatchTitles';
import * as S from './TournamentTitles.styles';

export const TournamentTitles: React.FC = memo(() => (
  <S.Root>
    <ColumnTitle title={scheduleTitles.tournament} />

    <MatchTitles />

    <ColumnTitle title={scheduleTitles.media} />
  </S.Root>
));
