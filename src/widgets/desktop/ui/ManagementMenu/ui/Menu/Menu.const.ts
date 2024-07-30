import { CreateBranding, UpdateBranding } from '@/features/branding';
import { CreateLanguage, UpdateLanguage } from '@/features/cast-language';
import { CreateSimpleEntityItem, UpdateSimpleEntityItem } from '@/features/management';
import { CreateRole, UpdateRole } from '@/features/role';
import { CreateTeam, UpdateTeam } from '@/features/team';
import { CreateUser, CreateUserCompany } from '@/features/user';
import { FormTemplates } from '@/shared/types/values.types';

import { RequestButtons } from './Menu.types';

export const requestButtons: RequestButtons = {
  users: [
    { value: 'user', label: 'User' },
    { value: 'company', label: 'Company' },
    { value: 'role', label: 'Role' },
  ],
  items: [
    { value: 'studio', label: 'Studio' },
    { value: 'analytic_studio', label: 'Studio analytics' },
    { value: 'setup', label: 'Setup' },
    { value: 'channel', label: 'Channel' },
    { value: 'stream', label: 'Stream' },
    { value: 'team', label: 'Team' },
    { value: 'sponsor', label: 'Sponsor' },
    { value: 'language', label: 'Language' },
    { value: 'branding', label: 'Branding' },
  ],
};

export const createFormTemplates: FormTemplates = {
  user: CreateUser,
  company: CreateUserCompany,
  role: CreateRole,
  studio: CreateSimpleEntityItem,
  analytic_studio: CreateSimpleEntityItem,
  setup: CreateSimpleEntityItem,
  channel: CreateSimpleEntityItem,
  stream: CreateSimpleEntityItem,
  team: CreateTeam,
  sponsor: CreateSimpleEntityItem,
  language: CreateLanguage,
  branding: CreateBranding,
};

export const editFormTemplates: FormTemplates = {
  role: UpdateRole,
  studio: UpdateSimpleEntityItem,
  analytic_studio: UpdateSimpleEntityItem,
  setup: UpdateSimpleEntityItem,
  channel: UpdateSimpleEntityItem,
  stream: UpdateSimpleEntityItem,
  team: UpdateTeam,
  sponsor: UpdateSimpleEntityItem,
  language: UpdateLanguage,
  branding: UpdateBranding,
};
