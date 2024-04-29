import { Dayjs } from 'dayjs';

export type QuarterPickerProps = {
  activeDate: [Dayjs, Dayjs];
  onChangeActiveDate: (newQuarter: [Dayjs, Dayjs]) => void;
};
