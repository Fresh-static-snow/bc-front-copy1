import { memo } from 'react';

import { scheduleTitles } from '@/entities/calendar/const';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import { MatchDetailsTitles } from '../MatchDetailsTitles/MatchDetailsTitles';
import * as S from './MatchTitles.styles';

export const MatchTitles: React.FC = memo(() => (
  <S.Root>
    <ColumnTitle title={scheduleTitles.time} />
    <ColumnTitle title={scheduleTitles.match} />

    <MatchDetailsTitles />
  </S.Root>
));
