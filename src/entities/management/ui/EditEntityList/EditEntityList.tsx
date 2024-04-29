import { useCallback } from 'react';

import { IconEditSvg, IconTrashSvg } from '@/shared/assets';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

import { EntitySimpleItem } from '../EntitySimpleItem/EntitySimpleItem';
import * as S from './EditEntityList.styles';
import { EditEntityListProps } from './EditEntityList.types';

export const EditEntityList: React.FC<EditEntityListProps> = ({
  mainKey,
  dataList,
  isLoading,
  onEdit,
  onDelete,
}) => {
  const onClickEdit = useCallback((id: number | string) => () => onEdit(id), [onEdit]);
  const onClickDelete = useCallback((id: number | string) => () => onDelete(id), [onDelete]);

  return (
    <S.Root>
      {dataList?.map(({ id, name }) => (
        <EntitySimpleItem
          key={`${mainKey}-${id}`}
          title={name}
          elementsList={[
            {
              key: `${mainKey}-${id}-edit`,
              content: (
                <PrimaryButton
                  IconComponent={IconEditSvg}
                  variant="secondary"
                  onClick={onClickEdit(id)}
                  isLoading={isLoading}
                />
              ),
            },
            {
              key: `${mainKey}-${id}-delete`,
              content: (
                <PrimaryButton
                  IconComponent={IconTrashSvg}
                  variant="secondary"
                  onClick={onClickDelete(id)}
                  isLoading={isLoading}
                />
              ),
            },
          ]}
        />
      ))}

      {!dataList && <CircularLoader size="24px" width="100%" padding="8px" />}
    </S.Root>
  );
};
