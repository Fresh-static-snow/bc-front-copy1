import { AccountSettings } from '@/shared/types/entities.types';

// * Params.
export type UpdateAccountSettingsParams = {
  formData: FormData;
};

// * Responses.
export type GetAccountSettingsResponse = AccountSettings;

export type UpdateAccountSettingsResponse = AccountSettings;
