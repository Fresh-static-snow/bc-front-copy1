import { SideWindowsState } from '../../../../types';

export type DatesButtonProps = {
  calendarFormat: 'day' | 'week' | 'month' | 'quarter' | 'year';
  isOpen: boolean;
  setSideWindowsState: React.Dispatch<React.SetStateAction<SideWindowsState>>;
};
