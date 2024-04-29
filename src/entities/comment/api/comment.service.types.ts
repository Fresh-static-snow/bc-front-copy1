import { UserComment } from '@/shared/types/entities.types';

// * Params.
export type CreateCommentParams = {
  formData: FormData;
};

export type GetCommentParams = {
  id: number | string;
};

export type UpdateCommentParams = {
  id: number | string;
  formData: FormData;
};

export type DeleteCommentParams = {
  id: number | string;
};

export type GetCommentFormParams = {
  id: number | string;
};

// * Responses.
export type GetCommentResponse = UserComment;

export type GetCommentFormResponse = UserComment;
