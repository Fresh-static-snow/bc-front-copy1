import { CreateCorporate } from '@/features/corporate';
import { CreateGameDiscipline, UpdateGameDiscipline } from '@/features/game-discipline';
import { CreateMatch, UpdateMatch } from '@/features/match';
import { CreateSegment, UpdateSegment } from '@/features/segment';
import { CreateTournament } from '@/features/tournament';
import { FormTemplates } from '@/shared/types/values.types';

export const createFormTemplates: FormTemplates = {
  discipline: CreateGameDiscipline,
  tournament: CreateTournament,
  corporate: CreateCorporate,
  match: CreateMatch,
  segment: CreateSegment,
};

export const editFormTemplates: FormTemplates = {
  discipline: UpdateGameDiscipline,
  match: UpdateMatch,
  segment: UpdateSegment,
};
