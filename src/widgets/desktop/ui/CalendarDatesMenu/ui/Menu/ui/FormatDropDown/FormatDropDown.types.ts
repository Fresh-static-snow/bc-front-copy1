import { SelectableValue } from '@/shared/types/values.types';

export type FormatDropDownProps = {
  calendarFormatValue: SelectableValue;
  setCalendarFormat: (format: SelectableValue) => void;
  formatButtons: SelectableValue[];
};
