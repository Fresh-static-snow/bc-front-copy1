import { ScheduleParticipant } from '@/entities/calendar/types';
import { UserInCalendarEntity } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type UsersRowProps = {
  color: HEX;
  mainParticipant?: UserInCalendarEntity;
  participants?: ScheduleParticipant[];
  withParticipants?: boolean;
};

export type StyledRootProps = {
  $gridColumns?: boolean;
};
