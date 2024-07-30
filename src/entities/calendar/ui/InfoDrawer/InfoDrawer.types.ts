import { ReactNode } from 'react';

import {
  Channel,
  GameDiscipline,
  Stream,
  UserInCalendarEntity,
} from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

import { ScheduleParticipant } from '../../types';

export type ContentRow = {
  id: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

export type ItemWithFilterList<T> = {
  item: T;
  filterList?: string[];
};

export type ItemsWithFilterList<T> = {
  items: T[];
  filterList?: string[];
};

export type InfoDrawerProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isVisible: boolean;
  color: HEX;
  eventName?: string;
  title?: string;
  teamOne?: string;
  teamTwo?: string;
  format?: string;
  date?: string;
  time?: string;
  location?: ReactNode;
  discipline?: ItemWithFilterList<GameDiscipline>;
  channels?: ItemsWithFilterList<Channel>;
  streams?: ItemsWithFilterList<Stream>;
  commentators?: ItemsWithFilterList<ScheduleParticipant>;
  analytics?: ItemsWithFilterList<ScheduleParticipant>;
  staff?: ItemsWithFilterList<UserInCalendarEntity>;
  mainParticipant?: ItemWithFilterList<UserInCalendarEntity>;
  mediaRepresentative?: ItemWithFilterList<UserInCalendarEntity>;
  onClickEdit?: () => void;
};

export type StyledStatusIndicatorProps = {
  $stripes: boolean;
  $baseColor: HEX;
};
