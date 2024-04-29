import { CreateCorporate } from '@/features/corporate';
import { CreateGameDiscipline, UpdateGameDiscipline } from '@/features/game-discipline';
import { CreateMatch, UpdateMatch } from '@/features/match';
import { CreateTournament } from '@/features/tournament';
import { FormTemplates } from '@/shared/types/values.types';

export const createFormTemplates: FormTemplates = {
  discipline: CreateGameDiscipline,
  tournament: CreateTournament,
  match: CreateMatch,
  corporate: CreateCorporate,
};

export const editFormTemplates: FormTemplates = {
  discipline: UpdateGameDiscipline,
  match: UpdateMatch,
};
