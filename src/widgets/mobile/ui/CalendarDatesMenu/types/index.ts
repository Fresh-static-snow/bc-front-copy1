export type DateControlSignature = {
  onClickToday: () => void;
  onClickBack: () => void;
  onClickForward: () => void;
  dateLabel: string;
  DatePicker: React.ReactElement;
};

export type CalendarFormat = 'day' | 'week' | 'month' | 'quarter' | 'year';

export type SideWindowsState = {
  dateDrawer: boolean;
  filterModal: boolean;
  formatDrawer: boolean;
};
