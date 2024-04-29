import { Channel, ChannelWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateCastChannelParams = {
  formData: FormData;
};

export type GetCastChannelParams = {
  id: number | string;
};

export type UpdateCastChannelParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedCastChannelParams = {
  id: number | string;
};

export type PreDeleteCastChannelParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteCastChannelParams = {
  id: number | string;
};

export type SearchCastChannelsParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetCastChannelFormParams = {
  id: number | string;
};

// * Responses
export type GetCastChannelResponse = Channel;

export type GetSearchCastChannelsResponse<T extends boolean> = T extends true
  ? ChannelWithEvents[]
  : Channel[];

export type GetCastChannelFormResponse = Channel;
