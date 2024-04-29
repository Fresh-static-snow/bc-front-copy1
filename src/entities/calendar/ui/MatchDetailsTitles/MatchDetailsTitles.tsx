import { memo } from 'react';

import { scheduleTitles } from '@/entities/calendar/const';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import * as S from './MatchDetailsTitles.styles';

export const MatchDetailsTitles: React.FC = memo(() => (
  <S.Root>
    <ColumnTitle title={scheduleTitles.studio} />
    <ColumnTitle title={scheduleTitles.analytics} />
    <ColumnTitle title={scheduleTitles.staff} />
    <ColumnTitle title={scheduleTitles.channel} />
  </S.Root>
));
