import { Corporate, UserComment } from '@/shared/types/entities.types';

// * Params.
export type CreateCorporateParams = {
  formData: FormData;
};

export type GetCorporateParams = {
  id: number | string;
};

export type UpdateCorporateParams = {
  id: number | string;
  formData: FormData;
};

export type DeleteCorporateParams = {
  id: number | string;
};

export type GetCorporateCommentsParams = {
  id: number | string;
};

export type GetCorporateFormParams = {
  id: number | string;
};

// * Responses.
export type GetCorporateResponse = Corporate;

export type GetCorporateFormResponse = Corporate;

export type GetCorporateCommentsResponse = UserComment[];
