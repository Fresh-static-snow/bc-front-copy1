import { GameDiscipline, GuestObject } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type ContentRow = {
  id: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

export type SegmentInfoTipContentProps = {
  title: string;
  color: HEX;
  discipline?: GameDiscipline;
  eventName?: string;
  date?: string;
  time?: string;
  guests?: GuestObject[];
  disciplineFilterList?: string[];
  onClickEdit?: () => void;
  onClickView?: () => void;
};
