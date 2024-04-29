import { UserCompanyForm, UserCompanyShort } from '@/shared/types/entities.types';

// * Params.
export type CreateUserCompanyParams = {
  formData: FormData;
};

export type GetUserCompanyParams = {
  id: number | string;
};

export type UpdateUserCompanyParams = {
  id: number | string;
  formData: FormData;
};

export type DeleteUserCompanyParams = {
  id: number | string;
};

export type SearchUserCompaniesParams = {
  term?: string;
};

export type GetUserCompanyFormParams = {
  id: number | string;
};

// * Responses.
export type GetUserCompanyResponse = UserCompanyShort;

export type GetSearchUserCompaniesResponse = UserCompanyShort[];

export type GetUserCompanyFormResponse = UserCompanyForm;
