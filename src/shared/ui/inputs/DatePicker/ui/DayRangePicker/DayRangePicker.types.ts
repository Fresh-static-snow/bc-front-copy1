import { Dayjs } from 'dayjs';

export type DayRangePickerProps = {
  activeDate: [Dayjs, Dayjs];
  onChangeActiveDate: (newDay: [Dayjs, Dayjs]) => void;
};
