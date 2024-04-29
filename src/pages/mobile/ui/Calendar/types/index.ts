import { Corporate, GameDiscipline, Match, Tournament } from '@/shared/types/entities.types';

export type CalendarOutletContext = {
  onClickTournament: (tournament: Tournament) => void;
  onClickDiscipline: (discipline: GameDiscipline) => void;
  onClickCorporate: (corporate: Corporate) => void;
  onClickMatch: (match: Match) => void;
};
