import { CorporateInCalendarEntity, GameDiscipline } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type CorporateItemProps = {
  corporate: CorporateInCalendarEntity;
  onClickCorporate?: (corporate: CorporateInCalendarEntity) => void;
};

export type CorporateItemMobileProps = CorporateItemProps & {
  discipline: GameDiscipline;
};

export type StyledLineMobileProps = {
  $color: HEX;
};
