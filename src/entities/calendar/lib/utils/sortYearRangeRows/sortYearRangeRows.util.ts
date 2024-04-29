import { RangeMatrixRow } from '@/entities/calendar/types';
import {
  CorporateInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';

import { addEventToRangeRow } from '../addEventToRangeRow/addEventToRangeRow.util';
import { generateRangeMatrixRow } from '../generateRangeMatrixRow/generateRangeMatrixRow.util';
import { getYearRangeIndexes } from '../getYearRangeIndexes/getYearRangeIndexes.util';

export const sortYearRangeRows = <T extends TournamentInCalendarEntity | CorporateInCalendarEntity>(
  activeDate: string,
  tournaments: T[],
) => {
  const rowsArray = [
    JSON.parse(JSON.stringify(generateRangeMatrixRow<T>(12))) as RangeMatrixRow<T>,
  ];

  tournaments?.forEach((tournament) => {
    const { startMonthIndex, startFourthIndex, endMonthIndex, endFourthIndex } =
      getYearRangeIndexes(
        activeDate,
        tournament.start_date,
        (tournament as TournamentInCalendarEntity).end_date ?? tournament.start_date,
      );

    addEventToRangeRow<T>(
      rowsArray,
      tournament,
      startMonthIndex,
      startFourthIndex,
      endMonthIndex,
      endFourthIndex,
      12,
    );
  });

  return rowsArray;
};
