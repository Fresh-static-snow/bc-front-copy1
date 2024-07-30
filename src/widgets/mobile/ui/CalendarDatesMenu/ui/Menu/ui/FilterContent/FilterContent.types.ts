import { SelectableValueWithChildren } from '@/shared/types/values.types';

export interface FilterContentProps {
  calendarFiltersOptions: SelectableValueWithChildren[];
  onCloseFilterModal: () => void;
}
