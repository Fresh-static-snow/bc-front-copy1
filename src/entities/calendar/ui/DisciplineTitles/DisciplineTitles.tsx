import { memo } from 'react';

import { scheduleTitles } from '../../const';
import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import { TournamentTitles } from '../TournamentTitles/TournamentTitles';
import * as S from './DisciplineTitles.styles';

export const DisciplineTitles: React.FC = memo(() => (
  <S.Root>
    <ColumnTitle title={scheduleTitles.discipline} />

    <TournamentTitles />
  </S.Root>
));
