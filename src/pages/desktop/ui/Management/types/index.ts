import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { EntityTemplatesKeys } from '@/features/management';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

export type DeletedEntityTemplatesKeys =
  | 'studio'
  | 'analytic_studio'
  | 'setup'
  | 'channel'
  | 'stream'
  | 'team'
  | 'sponsor'
  | 'language'
  | 'branding';

export type EntityContentTemplate = {
  mainKey: string;
  type: 'simple' | 'withHistory';
  requestType: PrimarySelectableValue;
  useGetItems: () => UseQueryResult<ItemWithRelatedEvents[]>;
  useDelete: () => UseMutationResult<
    void,
    AxiosError<AxiosErrorContent>,
    { id: string | number },
    unknown
  >;
};

export type DeletedEntityContentTemplate = {
  mainKey: string;
  type: 'simple' | 'withHistory';
  useGetItems: () => UseQueryResult<ItemWithRelatedEvents[]>;
  useRestore: () => UseMutationResult<
    void,
    AxiosError<AxiosErrorContent>,
    { id: string | number },
    unknown
  >;
  useDelete: () => UseMutationResult<
    void,
    AxiosError<AxiosErrorContent>,
    { id: string | number },
    unknown
  >;
};

export type EntityContentTemplateList = Partial<Record<EntityTemplatesKeys, EntityContentTemplate>>;
export type DeletedEntityContentTemplateList = Partial<
  Record<DeletedEntityTemplatesKeys, DeletedEntityContentTemplate>
>;
