import { UserInCalendarEntity } from '@/shared/types/entities.types';

export type PeopleTypes = {
  type: UserInCalendarEntity[];
  label: string;
};

export type ParticipantsProps = {
  peopleTypes: PeopleTypes[];
  count: number;
};
