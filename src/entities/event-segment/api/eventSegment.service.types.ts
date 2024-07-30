import {
  Format,
  MediaObject,
  PreDeletedTournament,
  Segment,
  SegmentById,
  SegmentInForm,
  UserComment,
} from '@/shared/types/entities.types';

// * Params.
export type Scope = 'only_deleted' | string;

export type CreateSegmentParams = {
  formData: FormData;
};

export type GetSegmentParams = {
  id: number | string;
};

export type GetSegmentFormParams = {
  id: number | string;
};

export type UpdateSegmentParams = {
  id: number | string;
  formData: FormData;
};

export type GetSegmentMediaParams = {
  id: number | string;
};

export type GetSegmentCommentsParams = {
  id: number | string;
};

export type RestorePreDeletedSegmentParams = {
  id: number | string;
};

export type RestorePreDeletedSegmentListParams = {
  ids: (number | string)[];
};

export type PreDeleteSegmentParams = {
  id: number | string;
};

export type PreDeleteSegmentListParams = {
  ids: (number | string)[];
};

export type DeleteSegmentParams = {
  id: number | string;
};

export type DeleteSegmentListParams = {
  ids: (number | string)[];
};

export type SearchSegmentsParams<T extends Scope> = {
  scope?: T;
};

// * Responses.
export type GetSegmentResponse = SegmentById;

export type GetSegmentTypesResponse = Format[];

export type GetSearchSegmentsResponse<T extends Scope> = T extends 'only_deleted'
  ? PreDeletedTournament[]
  : Segment[];

export type GetSegmentFormResponse = SegmentInForm;

export type GetSegmentMediasResponse = MediaObject[];

export type GetSegmentCommentsResponse = UserComment[];
