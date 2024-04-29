import { UserInCalendarEntity } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type UsersInfoTipContentProps = {
  color: HEX;
  users: UserInCalendarEntity[];
  filterList?: string[];
};
