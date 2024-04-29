import dayjs from 'dayjs';

export const getYearRangeIndexes = (
  activeDate: string,
  currentStartDate: string,
  currentEndDate: string,
) => {
  const currentYear = dayjs(activeDate).year();
  const tournamentStartYear = dayjs(currentStartDate).year();
  const tournamentEndYear = dayjs(currentEndDate).year();

  const startDate =
    tournamentStartYear < currentYear ? dayjs(activeDate).startOf('year') : dayjs(currentStartDate);

  const endDate =
    tournamentEndYear > currentYear ? dayjs(activeDate).endOf('year') : dayjs(currentEndDate);

  const startMonthIndex = startDate.month();
  const startDaysInMonth = startDate.daysInMonth();
  const startFourthDuration = Math.round(startDaysInMonth / 4);
  const startFourthIndex = Math.min(3, Math.floor(startDate.date() / startFourthDuration));

  const endMonthIndex = endDate.month();
  const endDaysInMonth = endDate.daysInMonth();
  const endFourthDuration = Math.round(endDaysInMonth / 4);
  const endFourthIndex = Math.min(3, Math.floor(endDate.date() / endFourthDuration));

  return {
    startMonthIndex,
    startFourthIndex,
    endMonthIndex,
    endFourthIndex,
  };
};
