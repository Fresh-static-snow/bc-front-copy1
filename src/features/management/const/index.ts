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
import { useCreateCastSetup, useGetCastSetupForm, useUpdateCastSetup } from '@/entities/cast-setup';
import {
  useCreateCastStream,
  useGetCastStreamForm,
  useUpdateCastStream,
} from '@/entities/cast-stream';
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
  setup: {
    mainKey: 'entity_creating_setup',
    useCreate: useCreateCastSetup,
  },
  channel: {
    mainKey: 'entity_creating_channel',
    useCreate: useCreateCastChannel,
  },
  stream: {
    mainKey: 'entity_creating_stream',
    useCreate: useCreateCastStream,
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
  setup: {
    mainKey: 'entity_editing_setup',
    useUpdate: useUpdateCastSetup,
    useGetForm: useGetCastSetupForm,
  },
  channel: {
    mainKey: 'entity_editing_channel',
    useUpdate: useUpdateCastChannel,
    useGetForm: useGetCastChannelForm,
  },
  stream: {
    mainKey: 'entity_editing_stream',
    useUpdate: useUpdateCastStream,
    useGetForm: useGetCastStreamForm,
  },
  sponsor: {
    mainKey: 'entity_editing_sponsor',
    useUpdate: useUpdateSponsor,
    useGetForm: useGetSponsorForm,
  },
};
