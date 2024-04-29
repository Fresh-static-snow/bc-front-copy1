import { Dayjs } from 'dayjs';

export type WeekPickerProps = {
  activeDate: [Dayjs, Dayjs];
  onChangeActiveDate: (newDay: [Dayjs, Dayjs]) => void;
};
