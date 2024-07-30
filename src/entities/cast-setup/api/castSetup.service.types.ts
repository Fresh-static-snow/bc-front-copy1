import { Setup, SetupWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateCastSetupParams = {
  formData: FormData;
};

export type GetCastSetupParams = {
  id: number | string;
};

export type UpdateCastSetupParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedCastSetupParams = {
  id: number | string;
};

export type PreDeleteCastSetupParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteCastSetupParams = {
  id: number | string;
};

export type SearchCastSetupsParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetCastSetupFormParams = {
  id: number | string;
};

// * Responses
export type GetCastSetupResponse = Setup;

export type GetSearchCastSetupsResponse<T extends boolean> = T extends true
  ? SetupWithEvents[]
  : Setup[];

export type GetCastSetupFormResponse = Setup;
