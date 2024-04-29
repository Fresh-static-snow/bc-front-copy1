import { memo } from 'react';

import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';

import * as S from './CalendarFooter.styles';
import { CalendarFooterProps } from './CalendarFooter.types';

export const CalendarFooter: React.FC<CalendarFooterProps> = memo(({ onClickToday }) => (
  <S.Root>
    <PrimaryButton onClick={onClickToday} variant="outlined" label="Today" />
  </S.Root>
));
