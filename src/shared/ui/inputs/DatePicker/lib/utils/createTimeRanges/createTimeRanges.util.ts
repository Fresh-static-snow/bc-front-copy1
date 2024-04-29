import dayjs from 'dayjs';

/**
 * Create time ranges between start and end times.
 * @param start The start time.
 * @param end The end time.
 */
export const createTimeRanges = (start: string, end: string): string[] => {
  const ranges: string[] = [];

  // * Create dayjs object for start time.
  const startDate = dayjs(`2000-01-01T${start}:00`);
  // * Create dayjs object for end time.
  const endDate = dayjs(`2000-01-01T${end}:00`);

  // * Iterate over 15-minute intervals between start and end times
  let currentDate = startDate;
  while (currentDate.isSameOrBefore(endDate)) {
    ranges.push(currentDate.format('HH:mm'));
    currentDate = currentDate.add(15, 'minute');
  }

  return ranges;
};
