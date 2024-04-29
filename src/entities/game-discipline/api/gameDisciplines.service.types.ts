import { GameDiscipline, PreDeletedDiscipline } from '@/shared/types/entities.types';

// * Params.
export type Scope = 'only_deleted' | string;

export type CreateGameDisciplineParams = {
  formData: FormData;
};

export type GetGameDisciplineParams = {
  id: number | string;
};

export type UpdateGameDisciplineParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedDisciplineParams = {
  id: number | string;
};

export type PreDeleteDisciplineParams = {
  id: number | string;
};

export type DeleteGameDisciplineParams = {
  id: number | string;
};

export type SearchGameDisciplinesParams<T extends Scope> = {
  term?: string;
  scope?: T;
};

export type GetGameDisciplineFormParams = {
  id: number | string;
};

// * Responses.
export type GetGameDisciplineResponse = GameDiscipline;

export type GetSearchGameDisciplinesResponse<T extends Scope> = T extends 'only_deleted'
  ? PreDeletedDiscipline[]
  : GameDiscipline[];

export type GetGameDisciplineFormResponse = GameDiscipline;
