import { RangeMatrixRow } from '@/entities/calendar/types';
import { CorporateInCalendarEntity } from '@/shared/types/entities.types';

export type CorporateRangeRowProps = {
  row: RangeMatrixRow<CorporateInCalendarEntity>;
  monthCount: number;
  withParticipants?: boolean;
  onClickCorporate?: (corporate: CorporateInCalendarEntity) => void;
};

export type StyledRootProps = {
  $monthCount: number;
};
