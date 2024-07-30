import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateSegmentParams,
  DeleteSegmentListParams,
  DeleteSegmentParams,
  GetSearchSegmentsResponse,
  GetSegmentCommentsParams,
  GetSegmentCommentsResponse,
  GetSegmentFormParams,
  GetSegmentFormResponse,
  GetSegmentMediaParams,
  GetSegmentMediasResponse,
  GetSegmentParams,
  GetSegmentResponse,
  GetSegmentTypesResponse,
  PreDeleteSegmentListParams,
  PreDeleteSegmentParams,
  RestorePreDeletedSegmentListParams,
  RestorePreDeletedSegmentParams,
  Scope,
  SearchSegmentsParams,
  UpdateSegmentParams,
} from './eventSegment.service.types';

export const createSegment = async ({ formData }: CreateSegmentParams): Promise<void> => {
  await axiosInstance.post(`segments`, formData);
};

export const getSegment = async ({ id }: GetSegmentParams): Promise<GetSegmentResponse> => {
  const result: AxiosResponse<ResponseData<GetSegmentResponse>> = await axiosInstance.get(
    `segments/${id}`,
  );
  return result.data.data;
};

export const updateSegment = async ({ id, formData }: UpdateSegmentParams): Promise<void> => {
  await axiosInstance.put(`segments/${id}`, formData);
};

export const restorePreDeletedSegment = async ({
  id,
}: RestorePreDeletedSegmentParams): Promise<void> => {
  await axiosInstance.put(`segments/${id}/restore`);
};

export const restorePreDeletedSegmentList = async ({
  ids,
}: RestorePreDeletedSegmentListParams): Promise<void> => {
  await axiosInstance.put(`segments/restore`, {}, { params: { ids } });
};

export const preDeleteSegment = async ({ id }: PreDeleteSegmentParams): Promise<void> => {
  await axiosInstance.delete(`segments/${id}/soft_destroy`);
};

export const preDeleteSegmentList = async ({ ids }: PreDeleteSegmentListParams): Promise<void> => {
  await axiosInstance.delete(`segments/soft_destroy`, {
    params: { ids },
  });
};

export const deleteSegment = async ({ id }: DeleteSegmentParams): Promise<void> => {
  await axiosInstance.delete(`segments/${id}`);
};

export const deleteSegmentList = async ({ ids }: DeleteSegmentListParams): Promise<void> => {
  await axiosInstance.delete(`segments/destroy`, {
    params: { ids },
  });
};

export const getSegmentTypes = async (): Promise<GetSegmentTypesResponse> => {
  const result: AxiosResponse<ResponseData<GetSegmentTypesResponse>> = await axiosInstance.get(
    'segments/types',
  );
  return result.data.data;
};

export const searchSegments = async <T extends Scope>({
  scope,
}: SearchSegmentsParams<T>): Promise<GetSearchSegmentsResponse<T>> => {
  const result: AxiosResponse<ResponseData<GetSearchSegmentsResponse<T>>> = await axiosInstance.get(
    'segments',
    { params: { scope } },
  );
  return result.data.data;
};

export const getSegmentForm = async ({
  id,
}: GetSegmentFormParams): Promise<GetSegmentFormResponse> => {
  const result: AxiosResponse<ResponseData<GetSegmentFormResponse>> = await axiosInstance.get(
    `segments/${id}/edit`,
  );
  return result.data.data;
};

export const getSegmentMedias = async ({
  id,
}: GetSegmentMediaParams): Promise<GetSegmentMediasResponse> => {
  const result: AxiosResponse<ResponseData<GetSegmentMediasResponse>> = await axiosInstance.get(
    `segments/${id}/media`,
  );
  return result.data.data;
};

export const getSegmentComments = async ({
  id,
}: GetSegmentCommentsParams): Promise<GetSegmentCommentsResponse> => {
  const result: AxiosResponse<ResponseData<GetSegmentCommentsResponse>> = await axiosInstance.get(
    `segments/${id}/comments`,
  );
  return result.data.data;
};
