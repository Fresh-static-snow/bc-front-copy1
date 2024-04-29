import { SelectableValue } from '@/shared/types/values.types';

import { SideWindowsState } from '../../../../types';

export type FormatButtonProps = {
  calendarFormatValue: SelectableValue;
  isOpen: boolean;
  setSideWindowsState: React.Dispatch<React.SetStateAction<SideWindowsState>>;
};
