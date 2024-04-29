import { ReactNode } from 'react';

import { Channel, GameDiscipline, UserInCalendarEntity } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

import { ScheduleParticipant } from '../../types';

export type ContentRow = {
  id: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

export type InfoDrawerProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isVisible: boolean;
  color: HEX;
  discipline?: GameDiscipline;
  eventName?: string;
  teamOne?: string;
  teamTwo?: string;
  format?: string;
  date?: string;
  time?: string;
  location?: ReactNode;
  channels?: Channel[];
  commentators?: ScheduleParticipant[];
  analytics?: ScheduleParticipant[];
  staff?: UserInCalendarEntity[];
  mainParticipant?: UserInCalendarEntity;
  mediaRepresentative?: UserInCalendarEntity;
  disciplineFilterList?: string[];
  channelFilterList?: string[];
  commentatorsFilterList?: string[];
  analyticsFilterList?: string[];
  staffFilterList?: string[];
  mainParticipantFilterList?: string[];
  mediaRepresentativeFilterList?: string[];
  onClickEdit?: () => void;
};

export type StyledStatusIndicatorProps = {
  $stripes: boolean;
  $baseColor: HEX;
};
