import {
  MediaObject,
  PreDeletedTournament,
  TournamentById,
  TournamentInTournamentForm,
  TournamentSchedule,
  TournamentShort,
  TournamentType,
  UserComment,
} from '@/shared/types/entities.types';

// * Params.
export type Scope = 'only_deleted' | string;

export type CreateTournamentParams = {
  formData: FormData;
};

export type GetTournamentParams = {
  id: number | string;
};

export type UpdateTournamentParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedTournamentParams = {
  id: number | string;
};

export type PreDeleteTournamentParams = {
  id: number | string;
};

export type DeleteTournamentParams = {
  id: number | string;
};

export type SearchTournamentsParams<T extends Scope> = {
  term?: string;
  scope?: T;
};

export type GetTournamentMediaParams = {
  id: number | string;
};

export type GetTournamentScheduleParams = {
  id: number | string;
};

export type GetTournamentCommentsParams = {
  id: number | string;
};

export type SearchTournamentTypesParams = {
  term?: string;
};

export type GetTournamentFormParams = {
  id: number | string;
};

// * Responses.
export type GetTournamentResponse = TournamentById;

export type GetSearchTournamentResponse<T extends Scope> = T extends 'only_deleted'
  ? PreDeletedTournament[]
  : TournamentShort[];

export type GetTournamentMediasResponse = MediaObject[];

export type GetTournamentScheduleResponse = TournamentSchedule;

export type GetSearchTournamentTypesResponse = TournamentType[];

export type GetTournamentFormResponse = TournamentInTournamentForm;

export type GetTournamentCommentsResponse = UserComment[];
