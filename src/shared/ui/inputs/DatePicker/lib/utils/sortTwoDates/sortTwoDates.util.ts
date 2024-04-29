import { Dayjs } from 'dayjs';

/**
 * Sort two dates in ascending order.
 * @param activeDateFirst The dayjs object of the first active date.
 * @param activeDateSecond The dayjs object of the second active date.
 */
export const sortTwoDates = (activeDateFirst: Dayjs, activeDateSecond: Dayjs): [Dayjs, Dayjs] => {
  // * If there is no second date, return the first date.
  if (!activeDateSecond) {
    return [activeDateFirst, undefined];
  }

  return activeDateFirst.isBefore(activeDateSecond)
    ? [activeDateFirst, activeDateSecond]
    : [activeDateSecond, activeDateFirst];
};
