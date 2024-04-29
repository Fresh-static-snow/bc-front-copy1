import dayjs from 'dayjs';

export const getQuarterMonths = (quarterIndex: number): string[] => {
  if (quarterIndex < 1 || quarterIndex > 4) {
    return [];
  }

  const startMonth = (quarterIndex - 1) * 3 + 1;
  const quarterStart = dayjs().month(startMonth - 1);
  const months: string[] = [];

  for (let i = 0; i < 3; i += 1) {
    months.push(quarterStart.add(i, 'month').format('MMMM'));
  }

  return months;
};
