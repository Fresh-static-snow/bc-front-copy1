import { Dayjs } from 'dayjs';

export type YearPickerProps = {
  activeDate: Dayjs;
  onChangeActiveDate: (newYear: Dayjs) => void;
};
