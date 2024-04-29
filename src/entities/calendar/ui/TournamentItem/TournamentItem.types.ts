import { GameDiscipline, Match, TournamentInCalendarEntity } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type TournamentItemProps = {
  tournament: TournamentInCalendarEntity;
  filters?: Record<string, string[]>;
  onClickTournament?: (tournament: TournamentInCalendarEntity) => void;
  onClickMatch?: (match: Match) => void;
};

export type TournamentItemMobileProps = TournamentItemProps & {
  discipline: GameDiscipline;
  setDisciplineTitle: React.Dispatch<React.SetStateAction<string>>;
  isVisibleDisciplineTitle: boolean;
  index: number;
};

export type StyledLineMobileProps = {
  $color: HEX;
};
