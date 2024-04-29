import { nanoid } from 'nanoid';

import { Month, RangeMatrixRow } from '@/entities/calendar/types';
import {
  CorporateInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';

export const generateRangeMatrixRow = <
  T extends TournamentInCalendarEntity | CorporateInCalendarEntity,
>(
  monthCount: number,
): RangeMatrixRow<T> => {
  const rangeMatrix: RangeMatrixRow<T> = { id: nanoid(), months: [] };

  for (let i = 0; i < monthCount; i += 1) {
    const month: Month<T> = {
      id: nanoid(),
      fourths: [{ id: nanoid() }, { id: nanoid() }, { id: nanoid() }, { id: nanoid() }],
    };

    rangeMatrix.months.push(month);
  }

  return rangeMatrix;
};
