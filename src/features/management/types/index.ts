import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { SimpleEntityItemFormSchema } from '@/entities/management';
import { AxiosErrorContent } from '@/shared/types/services.types';

export type EntityTemplatesKeys =
  | 'role'
  | 'studio'
  | 'analytic_studio'
  | 'channel'
  | 'team'
  | 'sponsor'
  | 'language';

export type EntityCreatingTemplate = {
  mainKey: string;
  useCreate: () => UseMutationResult<
    void,
    AxiosError<AxiosErrorContent>,
    { formData: FormData },
    unknown
  >;
};

export type EntityEditingTemplate = {
  mainKey: string;
  useGetForm: (id: string) => UseQueryResult<SimpleEntityItemFormSchema>;
  useUpdate: () => UseMutationResult<
    void,
    AxiosError<AxiosErrorContent>,
    { id: string | number; formData: FormData },
    unknown
  >;
};

export type EntityCreatingTemplateList = Partial<
  Record<EntityTemplatesKeys, EntityCreatingTemplate>
>;
export type EntityEditingTemplateList = Partial<Record<EntityTemplatesKeys, EntityEditingTemplate>>;
