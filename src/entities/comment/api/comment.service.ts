import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCommentParams,
  DeleteCommentParams,
  GetCommentFormParams,
  GetCommentFormResponse,
  GetCommentParams,
  GetCommentResponse,
  UpdateCommentParams,
} from './comment.service.types';

export const createComment = async ({ formData }: CreateCommentParams): Promise<void> => {
  await axiosInstance.post(`entity_comments`, formData);
};

export const getComment = async ({ id }: GetCommentParams): Promise<GetCommentResponse> => {
  const result: AxiosResponse<ResponseData<GetCommentResponse>> = await axiosInstance.get(
    `entity_comments/${id}`,
  );
  return result.data.data;
};

export const updateComment = async ({ id, formData }: UpdateCommentParams): Promise<void> => {
  await axiosInstance.put(`entity_comments/${id}`, formData);
};

export const deleteComment = async ({ id }: DeleteCommentParams): Promise<void> => {
  await axiosInstance.delete(`entity_comments/${id}`);
};

export const getCommentForm = async ({
  id,
}: GetCommentFormParams): Promise<GetCommentFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCommentFormResponse>> = await axiosInstance.get(
    `entity_comments/${id}/edit`,
  );
  return result.data.data;
};
