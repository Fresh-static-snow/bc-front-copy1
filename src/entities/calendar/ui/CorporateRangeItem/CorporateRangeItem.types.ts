import { CorporateInCalendarEntity } from '@/shared/types/entities.types';

export type CorporateRangeItemProps = {
  periodLength: number;
  corporate: CorporateInCalendarEntity;
  withParticipants?: boolean;
  onClickCorporate?: (corporate: CorporateInCalendarEntity) => void;
};

export type StyledCorporateWrapperProps = {
  $periodLength: number;
};
