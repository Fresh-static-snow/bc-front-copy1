import {
  useCreateCastAnalyticStudio,
  useGetCastAnalyticStudioForm,
  useUpdateCastAnalyticStudio,
} from '@/entities/cast-analytic-studio';
import {
  useCreateCastChannel,
  useGetCastChannelForm,
  useUpdateCastChannel,
} from '@/entities/cast-channel';
import {
  useCreateCastStudio,
  useGetCastStudioForm,
  useUpdateCastStudio,
} from '@/entities/cast-studio';
import { useCreateSponsor, useGetSponsorForm, useUpdateSponsor } from '@/entities/sponsor';

import { EntityCreatingTemplateList, EntityEditingTemplateList } from '../types';

export const entityCreatingTemplates: EntityCreatingTemplateList = {
  studio: {
    mainKey: 'entity_creating_studio',
    useCreate: useCreateCastStudio,
  },
  analytic_studio: {
    mainKey: 'entity_creating_analytic_studio',
    useCreate: useCreateCastAnalyticStudio,
  },
  channel: {
    mainKey: 'entity_creating_channel',
    useCreate: useCreateCastChannel,
  },
  sponsor: {
    mainKey: 'entity_creating_sponsor',
    useCreate: useCreateSponsor,
  },
};

export const entityEditingTemplates: EntityEditingTemplateList = {
  studio: {
    mainKey: 'entity_editing_studio',
    useUpdate: useUpdateCastStudio,
    useGetForm: useGetCastStudioForm,
  },
  analytic_studio: {
    mainKey: 'entity_editing_analytic_studio',
    useUpdate: useUpdateCastAnalyticStudio,
    useGetForm: useGetCastAnalyticStudioForm,
  },
  channel: {
    mainKey: 'entity_editing_channel',
    useUpdate: useUpdateCastChannel,
    useGetForm: useGetCastChannelForm,
  },
  sponsor: {
    mainKey: 'entity_editing_sponsor',
    useUpdate: useUpdateSponsor,
    useGetForm: useGetSponsorForm,
  },
};
