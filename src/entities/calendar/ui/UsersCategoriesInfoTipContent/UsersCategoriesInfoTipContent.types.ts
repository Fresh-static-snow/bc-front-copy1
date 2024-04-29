import { HEX } from '@/shared/types/styles.types';

import { CalendarPerson } from '../../types';

export type Participant = {
  category: string;
  people: CalendarPerson[];
  filter?: string[];
};

export type UsersCategoriesInfoTipContentProps = {
  color: HEX;
  users: Participant[];
};
