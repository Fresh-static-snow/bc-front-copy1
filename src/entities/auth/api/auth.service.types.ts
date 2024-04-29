import { AuthPermissions, User } from '@/shared/types/entities.types';

// * Params.
export type LoginParams = {
  formData: FormData;
};

export type InvitationParams = {
  formData: FormData;
};

export type ResentInvitationParams = {
  id: number | string;
};

export type EmailCheckingParams = {
  formData: FormData;
};

export type ChangePasswordParams = {
  formData: FormData;
};

// * Responses.
export type PostLoginResponse = User;

export type PutInvitationResponse = User;

export type PutChangePasswordResponse = User;

export type GetAuthPermissionsResponse = AuthPermissions;
