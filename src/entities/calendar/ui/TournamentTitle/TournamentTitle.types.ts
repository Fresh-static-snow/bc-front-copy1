import { HEX } from '@/shared/types/styles.types';

export type TournamentTitleProps = {
  title: string;
  color: HEX;
  isVisible?: boolean;
  onClickTournament?: () => void;
};
