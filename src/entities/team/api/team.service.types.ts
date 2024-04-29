import { Team, TeamWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateTeamParams = {
  formData: FormData;
};

export type GetTeamParams = {
  id: number | string;
};

export type UpdateTeamParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedTeamParams = {
  id: number | string;
};

export type PreDeleteTeamParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteTeamParams = {
  id: number | string;
};

export type SearchTeamsParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetTeamFormParams = {
  id: number | string;
};

// * Responses
export type GetTeamResponse = Team;

export type GetSearchTeamsResponse<T extends boolean> = T extends true ? TeamWithEvents[] : Team[];

export type GetTeamFormResponse = Team;
