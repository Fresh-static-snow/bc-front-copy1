import { Permission, Role } from '@/shared/types/entities.types';

// * Params.
export type CreateRoleParams = {
  formData: FormData;
};

export type GetRoleParams = {
  id: number | string;
};

export type UpdateRoleParams = {
  id: number | string;
  formData: FormData;
};

export type DeleteRoleParams = {
  id: number | string;
};

export type GetRoleFormParams = {
  id: number | string;
};

// * Responses.
export type GetRoleResponse = Role;

export type GetSearchRolesResponse = Role[];

export type GetRoleFormResponse = Role;

export type GetRolePermissionsResponse = Permission[];
