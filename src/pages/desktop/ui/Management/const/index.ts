import {
  useDeleteBranding,
  useGetPreDeletedBrandingItems,
  useRestorePreDeletedBranding,
} from '@/entities/branding';
import {
  useDeleteCastAnalyticStudio,
  useGetCastAnalyticStudioItemsWithHistory,
  useGetPreDeletedCastAnalyticStudioItems,
  usePreDeleteCastAnalyticStudio,
  useRestorePreDeletedCastAnalyticStudio,
} from '@/entities/cast-analytic-studio';
import {
  useDeleteCastChannel,
  useGetCastChannelItemsWithHistory,
  useGetPreDeletedCastChannelItems,
  usePreDeleteCastChannel,
  useRestorePreDeletedCastChannel,
} from '@/entities/cast-channel';
import {
  useDeleteCastLanguage,
  useGetCastLanguageItemsWithHistory,
  useGetPreDeletedCastLanguageItems,
  usePreDeleteCastLanguage,
  useRestorePreDeletedCastLanguage,
} from '@/entities/cast-language';
import {
  useDeleteCastSetup,
  useGetCastSetupItemsWithHistory,
  useGetPreDeletedCastSetupItems,
  usePreDeleteCastSetup,
  useRestorePreDeletedCastSetup,
} from '@/entities/cast-setup';
import {
  useDeleteCastStream,
  useGetCastStreamItemsWithHistory,
  useGetPreDeletedCastStreamItems,
  usePreDeleteCastStream,
  useRestorePreDeletedCastStream,
} from '@/entities/cast-stream';
import {
  useDeleteCastStudio,
  useGetCastStudioItemsWithHistory,
  useGetPreDeletedCastStudioItems,
  usePreDeleteCastStudio,
  useRestorePreDeletedCastStudio,
} from '@/entities/cast-studio';
import { useDeleteRole, useGetRoleItemsWithHistory } from '@/entities/role';
import {
  useDeleteSponsor,
  useGetPreDeletedSponsorItems,
  useGetSponsorItemsWithHistory,
  usePreDeleteSponsor,
  useRestorePreDeletedSponsor,
} from '@/entities/sponsor';
import {
  useDeleteTeam,
  useGetPreDeletedTeamItems,
  useGetTeamItemsWithHistory,
  usePreDeleteTeam,
  useRestorePreDeletedTeam,
} from '@/entities/team';

import { DeletedEntityContentTemplateList, EntityContentTemplateList } from '../types';

export const entityContentTemplates: EntityContentTemplateList = {
  role: {
    mainKey: 'entity_content_role',
    type: 'simple',
    requestType: { value: 'role', label: 'Role' },
    useGetItems: useGetRoleItemsWithHistory,
    useDelete: useDeleteRole,
  },
  studio: {
    mainKey: 'entity_content_studio',
    type: 'withHistory',
    requestType: { value: 'studio', label: 'Studio' },
    useGetItems: useGetCastStudioItemsWithHistory,
    useDelete: usePreDeleteCastStudio,
  },
  analytic_studio: {
    mainKey: 'entity_content_analytic_studio',
    type: 'withHistory',
    requestType: { value: 'analytic_studio', label: 'Analyst Studio' },
    useGetItems: useGetCastAnalyticStudioItemsWithHistory,
    useDelete: usePreDeleteCastAnalyticStudio,
  },
  setup: {
    mainKey: 'entity_content_setup',
    type: 'withHistory',
    requestType: { value: 'setup', label: 'Setup' },
    useGetItems: useGetCastSetupItemsWithHistory,
    useDelete: usePreDeleteCastSetup,
  },
  channel: {
    mainKey: 'entity_content_channel',
    type: 'withHistory',
    requestType: { value: 'channel', label: 'Channel' },
    useGetItems: useGetCastChannelItemsWithHistory,
    useDelete: usePreDeleteCastChannel,
  },
  stream: {
    mainKey: 'entity_content_stream',
    type: 'withHistory',
    requestType: { value: 'stream', label: 'Stream' },
    useGetItems: useGetCastStreamItemsWithHistory,
    useDelete: usePreDeleteCastStream,
  },
  team: {
    mainKey: 'entity_content_team',
    type: 'withHistory',
    requestType: { value: 'team', label: 'Team' },
    useGetItems: useGetTeamItemsWithHistory,
    useDelete: usePreDeleteTeam,
  },
  sponsor: {
    mainKey: 'entity_content_sponsor',
    type: 'withHistory',
    requestType: { value: 'sponsor', label: 'Sponsor' },
    useGetItems: useGetSponsorItemsWithHistory,
    useDelete: usePreDeleteSponsor,
  },
  language: {
    mainKey: 'entity_content_language',
    type: 'withHistory',
    requestType: { value: 'language', label: 'Language' },
    useGetItems: useGetCastLanguageItemsWithHistory,
    useDelete: usePreDeleteCastLanguage,
  },
};

export const deletedEntityContentTemplates: DeletedEntityContentTemplateList = {
  studio: {
    mainKey: 'deleted_entity_content_studio',
    type: 'withHistory',
    useGetItems: useGetPreDeletedCastStudioItems,
    useRestore: useRestorePreDeletedCastStudio,
    useDelete: useDeleteCastStudio,
  },
  analytic_studio: {
    mainKey: 'deleted_entity_content_analytic_studio',
    type: 'withHistory',
    useGetItems: useGetPreDeletedCastAnalyticStudioItems,
    useRestore: useRestorePreDeletedCastAnalyticStudio,
    useDelete: useDeleteCastAnalyticStudio,
  },
  setup: {
    mainKey: 'deleted_entity_content_setup',
    type: 'withHistory',
    useGetItems: useGetPreDeletedCastSetupItems,
    useRestore: useRestorePreDeletedCastSetup,
    useDelete: useDeleteCastSetup,
  },
  channel: {
    mainKey: 'deleted_entity_content_channel',
    type: 'withHistory',
    useGetItems: useGetPreDeletedCastChannelItems,
    useRestore: useRestorePreDeletedCastChannel,
    useDelete: useDeleteCastChannel,
  },
  stream: {
    mainKey: 'deleted_entity_content_stream',
    type: 'withHistory',
    useGetItems: useGetPreDeletedCastStreamItems,
    useRestore: useRestorePreDeletedCastStream,
    useDelete: useDeleteCastStream,
  },
  team: {
    mainKey: 'deleted_entity_content_team',
    type: 'withHistory',
    useGetItems: useGetPreDeletedTeamItems,
    useRestore: useRestorePreDeletedTeam,
    useDelete: useDeleteTeam,
  },
  sponsor: {
    mainKey: 'deleted_entity_content_sponsor',
    type: 'withHistory',
    useGetItems: useGetPreDeletedSponsorItems,
    useRestore: useRestorePreDeletedSponsor,
    useDelete: useDeleteSponsor,
  },
  language: {
    mainKey: 'deleted_entity_content_language',
    type: 'withHistory',
    useGetItems: useGetPreDeletedCastLanguageItems,
    useRestore: useRestorePreDeletedCastLanguage,
    useDelete: useDeleteCastLanguage,
  },
  branding: {
    mainKey: 'deleted_entity_content_branding',
    type: 'simple',
    useGetItems: useGetPreDeletedBrandingItems,
    useRestore: useRestorePreDeletedBranding,
    useDelete: useDeleteBranding,
  },
};
