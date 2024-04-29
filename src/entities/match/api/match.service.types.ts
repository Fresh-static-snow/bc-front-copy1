import {
  Match,
  MatchInMatchForm,
  MatchType,
  PreDeletedTournament,
} from '@/shared/types/entities.types';

// * Params.
export type Scope = 'only_deleted' | string;

export type CreateMatchParams = {
  formData: FormData;
};

export type GetMatchParams = {
  id: number | string;
};

export type GetMatchFormParams = {
  id: number | string;
};

export type UpdateMatchParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedMatchParams = {
  id: number | string;
};

export type RestorePreDeletedMatchListParams = {
  id: (number | string)[];
};

export type PreDeleteMatchParams = {
  id: number | string;
};

export type PreDeleteMatchListParams = {
  id: (number | string)[];
};

export type DeleteMatchParams = {
  id: number | string;
};

export type DeleteMatchListParams = {
  id: (number | string)[];
};

export type SearchMatchesParams<T extends Scope> = {
  scope?: T;
};

// * Responses.
export type GetMatchResponse = Match;

export type GetMatchTypesResponse = MatchType[];

export type GetSearchMatchesResponse<T extends Scope> = T extends 'only_deleted'
  ? PreDeletedTournament[]
  : Match[];

export type GetMatchFormResponse = MatchInMatchForm;
