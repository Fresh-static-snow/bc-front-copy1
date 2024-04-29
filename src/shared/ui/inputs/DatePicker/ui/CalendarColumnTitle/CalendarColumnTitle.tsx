import { memo } from 'react';

import * as S from './CalendarColumnTitle.styles';
import { CalendarColumnTitleProps } from './CalendarColumnTitle.types';

export const CalendarColumnTitle: React.FC<CalendarColumnTitleProps> = memo(({ day }) => (
  <S.Root>{day}</S.Root>
));
