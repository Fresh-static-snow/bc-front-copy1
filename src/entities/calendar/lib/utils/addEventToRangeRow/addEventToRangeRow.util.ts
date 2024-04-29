import { RangeMatrixRow } from '@/entities/calendar/types';
import {
  CorporateInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';

import { generateRangeMatrixRow } from '../generateRangeMatrixRow/generateRangeMatrixRow.util';

export const addEventToRangeRow = <
  T extends TournamentInCalendarEntity | CorporateInCalendarEntity,
>(
  rowsArray: RangeMatrixRow<T>[],
  event: T,
  startMonthIndex: number,
  startFourthIndex: number,
  endMonthIndex: number,
  endFourthIndex: number,
  monthCount: number,
) => {
  for (let rowIndex = 0; rowIndex < rowsArray.length; rowIndex += 1) {
    const row = rowsArray[rowIndex];

    let isCanAdd = true;

    monthLoop: for (
      let monthIndex = startMonthIndex;
      monthIndex <= endMonthIndex;
      monthIndex += 1
    ) {
      const month = row.months[monthIndex];

      for (let fourthIndex = 0; fourthIndex < month.fourths.length; fourthIndex += 1) {
        const fourth = month.fourths[fourthIndex];

        if (
          (monthIndex === startMonthIndex && fourthIndex < startFourthIndex) ||
          (monthIndex === endMonthIndex && fourthIndex > endFourthIndex)
        ) {
          continue;
        } else if (fourth.event || fourth.event === null) {
          isCanAdd = false;
          break monthLoop;
        }
      }
    }

    if (isCanAdd) {
      let periodLength = 0;

      for (let monthIndex = startMonthIndex; monthIndex <= endMonthIndex; monthIndex += 1) {
        const month = row.months[monthIndex];

        for (let fourthIndex = 0; fourthIndex < month.fourths.length; fourthIndex += 1) {
          const fourth = month.fourths[fourthIndex];

          if (monthIndex === startMonthIndex && fourthIndex === startFourthIndex) {
            fourth.event = event;
            periodLength += 1;
          } else if (
            (monthIndex === startMonthIndex && fourthIndex < startFourthIndex) ||
            (monthIndex === endMonthIndex && fourthIndex > endFourthIndex)
          ) {
            continue;
          } else {
            fourth.event = null;
            periodLength += 1;
          }
        }
      }

      row.months[startMonthIndex].fourths[startFourthIndex] = {
        ...row.months[startMonthIndex].fourths[startFourthIndex],
        periodLength,
      };

      break;
    }

    if (!isCanAdd && rowIndex === rowsArray.length - 1) {
      const newRow = JSON.parse(
        JSON.stringify(generateRangeMatrixRow<T>(monthCount)),
      ) as RangeMatrixRow<T>;

      let periodLength = 0;

      for (let monthIndex = startMonthIndex; monthIndex <= endMonthIndex; monthIndex += 1) {
        const month = newRow.months[monthIndex];

        for (let fourthIndex = 0; fourthIndex < month.fourths.length; fourthIndex += 1) {
          const fourth = month.fourths[fourthIndex];

          if (monthIndex === startMonthIndex && fourthIndex === startFourthIndex) {
            fourth.event = event;
            periodLength += 1;
          } else if (
            (monthIndex === startMonthIndex && fourthIndex < startFourthIndex) ||
            (monthIndex === endMonthIndex && fourthIndex > endFourthIndex)
          ) {
            continue;
          } else {
            fourth.event = null;
            periodLength += 1;
          }
        }
      }

      newRow.months[startMonthIndex].fourths[startFourthIndex] = {
        ...newRow.months[startMonthIndex].fourths[startFourthIndex],
        periodLength,
      };

      rowsArray.push(newRow);
      break;
    }
  }
};
