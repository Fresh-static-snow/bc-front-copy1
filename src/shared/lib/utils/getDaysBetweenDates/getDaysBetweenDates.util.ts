import dayjs, { Dayjs } from 'dayjs';

export const getDaysBetweenDates = (startDay: Dayjs, daysAmount: number): Dayjs[] => {
  const result: Dayjs[] = [];

  if (daysAmount < 0) return [];

  for (let i = 0; i < daysAmount; i += 1) {
    result.push(dayjs(startDay).add(i, 'days'));
  }

  return result;
};
