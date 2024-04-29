import { AnalyticStudio, AnalyticStudioWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateCastAnalyticStudioParams = {
  formData: FormData;
};

export type GetCastAnalyticStudioParams = {
  id: number | string;
};

export type UpdateCastAnalyticStudioParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedCastAnalyticStudioParams = {
  id: number | string;
};

export type PreDeleteCastAnalyticStudioParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteCastAnalyticStudioParams = {
  id: number | string;
};

export type SearchCastAnalyticStudiosParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetCastAnalyticStudioFormParams = {
  id: number | string;
};

// * Responses
export type GetCastAnalyticStudioResponse = AnalyticStudio;

export type GetSearchCastAnalyticStudiosResponse<T extends boolean> = T extends true
  ? AnalyticStudioWithEvents[]
  : AnalyticStudio[];

export type GetCastAnalyticStudioFormResponse = AnalyticStudio;
