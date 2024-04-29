import { Branding } from '@/shared/types/entities.types';

// * Params
export type Scope = 'only_deleted' | string;

export type CreateBrandingParams = {
  formData: FormData;
};

export type GetBrandingParams = {
  id: number | string;
};

export type UpdateBrandingParams = {
  id: number | string;
  formData: FormData;
};

export type ChangeBrandingStatusParams = {
  formData: FormData;
};

export type RestorePreDeletedBrandingParams = {
  id: number | string;
};

export type PreDeleteBrandingParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteBrandingParams = {
  id: number | string;
};

export type SearchBrandingParams<T extends Scope> = {
  term?: string;
  scope?: T;
};

export type GetBrandingFormParams = {
  id: number | string;
};

// * Responses
export type GetBrandingResponse = Branding;

export type GetBrandingMainResponse = Branding;

export type GetSearchBrandingResponse = Branding[];

export type GetBrandingFormResponse = Branding;
