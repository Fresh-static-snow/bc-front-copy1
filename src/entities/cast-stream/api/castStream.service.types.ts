import { Stream, StreamWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateCastStreamParams = {
  formData: FormData;
};

export type GetCastStreamParams = {
  id: number | string;
};

export type UpdateCastStreamParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedCastStreamParams = {
  id: number | string;
};

export type PreDeleteCastStreamParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteCastStreamParams = {
  id: number | string;
};

export type SearchCastStreamsParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetCastStreamFormParams = {
  id: number | string;
};

// * Responses
export type GetCastStreamResponse = Stream;

export type GetSearchCastStreamsResponse<T extends boolean> = T extends true
  ? StreamWithEvents[]
  : Stream[];

export type GetCastStreamFormResponse = Stream;
