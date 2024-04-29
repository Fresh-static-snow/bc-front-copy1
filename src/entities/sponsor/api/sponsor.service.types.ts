import { Sponsor, SponsorWithEvents } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateSponsorParams = {
  formData: FormData;
};

export type GetSponsorParams = {
  id: number | string;
};

export type UpdateSponsorParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedSponsorParams = {
  id: number | string;
};

export type PreDeleteSponsorParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteSponsorParams = {
  id: number | string;
};

export type SearchSponsorsParams<T extends Scope> = {
  term?: string;
  scope?: T;
  with_history?: boolean;
};

export type GetSponsorFormParams = {
  id: number | string;
};

// * Responses
export type GetSponsorResponse = Sponsor;

export type GetSearchSponsorsResponse<T extends boolean> = T extends true
  ? SponsorWithEvents[]
  : Sponsor[];

export type GetSponsorFormResponse = Sponsor;
