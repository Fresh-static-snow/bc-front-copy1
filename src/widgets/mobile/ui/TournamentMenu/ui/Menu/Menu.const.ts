import { UpdateMatch } from '@/features/match';
import { UpdateSegment } from '@/features/segment';
import { UpdateTournament } from '@/features/tournament';
import { FormTemplates } from '@/shared/types/values.types';

export const editFormTemplates: FormTemplates = {
  tournament: UpdateTournament,
  match: UpdateMatch,
  segment: UpdateSegment,
};
