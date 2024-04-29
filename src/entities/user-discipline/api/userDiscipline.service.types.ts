import { UserDiscipline } from '@/shared/types/entities.types';

// * Params.
export type CreateUserDisciplineParams = {
  title: string;
};

export type GetUserDisciplineParams = {
  id: number | string;
};

export type UpdateUserDisciplineParams = {
  id: number | string;
  title: string;
};

export type DeleteUserDisciplineParams = {
  id: number | string;
};

export type SearchUserDisciplinesParams = {
  term?: string;
};

export type GetUserDisciplineFormParams = {
  id: number | string;
};

// * Responses.
export type GetUserDisciplineResponse = UserDiscipline;

export type GetSearchUserDisciplinesResponse = UserDiscipline[];

export type GetUserDisciplineFormResponse = UserDiscipline;
