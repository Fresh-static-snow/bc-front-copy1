import { Language, LanguageWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateCastLanguageParams = {
  formData: FormData;
};

export type GetCastLanguageParams = {
  id: number | string;
};

export type UpdateCastLanguageParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedCastLanguageParams = {
  id: number | string;
};

export type PreDeleteCastLanguageParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteCastLanguageParams = {
  id: number | string;
};

export type SearchCastLanguagesParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetCastLanguageFormParams = {
  id: number | string;
};

// * Responses
export type GetCastLanguageResponse = Language;

export type GetSearchCastLanguagesResponse<T extends boolean> = T extends true
  ? LanguageWithEvents[]
  : Language[];

export type GetCastLanguageFormResponse = Language;
