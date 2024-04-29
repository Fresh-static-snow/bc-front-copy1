import { Channel, GameDiscipline, UserInCalendarEntity } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

import { ScheduleParticipant } from '../../types';

export type ContentRow = {
  id: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

export type FullInfoTipContentProps = {
  color: HEX;
  discipline?: GameDiscipline;
  eventName?: string;
  startDate?: string;
  endDate?: string;
  tier?: string | number;
  location?: string;
  channels?: Channel[];
  commentators?: ScheduleParticipant[];
  analytics?: ScheduleParticipant[];
  mainParticipant?: UserInCalendarEntity;
  mediaRepresentative?: UserInCalendarEntity;
  disciplineFilterList?: string[];
  channelFilterList?: string[];
  commentatorsFilterList?: string[];
  analyticsFilterList?: string[];
  mainParticipantFilterList?: string[];
  mediaRepresentativeFilterList?: string[];
};
