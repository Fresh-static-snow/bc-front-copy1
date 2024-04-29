import { Dayjs } from 'dayjs';

export type MonthPickerProps = {
  activeDate: Dayjs;
  onChangeActiveDate: (newMonth: Dayjs) => void;
};
