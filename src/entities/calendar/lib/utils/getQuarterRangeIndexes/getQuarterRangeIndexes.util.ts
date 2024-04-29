import dayjs from 'dayjs';

export const getQuarterRangeIndexes = (
  activeDate: string,
  currentStartDate: string,
  currentEndDate: string,
) => {
  const currentYear = dayjs(activeDate).year();
  const tournamentStartYear = dayjs(currentStartDate).year();
  const tournamentEndYear = dayjs(currentEndDate).year();

  const currentQuarter = dayjs(activeDate).quarter();
  const tournamentStartQuarter = dayjs(currentStartDate).quarter();
  const tournamentEndQuarter = dayjs(currentEndDate).quarter();

  const startDate =
    tournamentStartYear < currentYear || tournamentStartQuarter < currentQuarter
      ? dayjs(activeDate).startOf('quarter')
      : dayjs(currentStartDate);

  const endDate =
    tournamentEndYear > currentYear || tournamentEndQuarter > currentQuarter
      ? dayjs(activeDate).endOf('quarter')
      : dayjs(currentEndDate);

  const startMonthIndex = startDate.month();
  const startQuarterMonthIndex = startMonthIndex - 3 * (startDate.quarter() - 1);
  const startDaysInMonth = startDate.daysInMonth();
  const startFourthDuration = Math.round(startDaysInMonth / 4);
  const startFourthIndex = Math.min(3, Math.floor(startDate.date() / startFourthDuration));

  const endMonthIndex = endDate.month();
  const endQuarterMonthIndex = endMonthIndex - 3 * (endDate.quarter() - 1);
  const endDaysInMonth = endDate.daysInMonth();
  const endFourthDuration = Math.round(endDaysInMonth / 4);
  const endFourthIndex = Math.min(3, Math.floor(endDate.date() / endFourthDuration));

  return {
    startMonthIndex: startQuarterMonthIndex,
    startFourthIndex,
    endMonthIndex: endQuarterMonthIndex,
    endFourthIndex,
  };
};
