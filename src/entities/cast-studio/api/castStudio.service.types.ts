import { Studio, StudioWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateCastStudioParams = {
  formData: FormData;
};

export type GetCastStudioParams = {
  id: number | string;
};

export type UpdateCastStudioParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedCastStudioParams = {
  id: number | string;
};

export type PreDeleteCastStudioParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteCastStudioParams = {
  id: number | string;
};

export type SearchCastStudiosParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetCastStudioFormParams = {
  id: number | string;
};

// * Responses
export type GetCastStudioResponse = Studio;

export type GetSearchCastStudiosResponse<T extends boolean> = T extends true
  ? StudioWithEvents[]
  : Studio[];

export type GetCastStudioFormResponse = Studio;
