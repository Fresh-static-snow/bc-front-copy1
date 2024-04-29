import { Region } from '@/shared/types/entities.types';

// * Params.
export type SearchRegionsParams = {
  term?: string;
};

// * Responses.
export type GetSearchRegionsResponse = Region[];
