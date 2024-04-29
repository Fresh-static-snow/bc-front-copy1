import { Dayjs } from 'dayjs';

export type DayPickerProps = {
  activeDate: Dayjs;
  onChangeActiveDate: (newDay: Dayjs) => void;
};
