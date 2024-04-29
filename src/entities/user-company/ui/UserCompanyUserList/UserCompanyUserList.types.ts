import { UserInCompany } from '@/shared/types/entities.types';

export type UserCompanyUserListProps = {
  mainKey: string;
  dataList: UserInCompany[];
  onOpenCreationModal: () => void;
};
