import { useCallback } from 'react';

import { IconRotateCcwSvg, IconTrashSvg } from '@/shared/assets';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

import { EntitySimpleItem } from '../EntitySimpleItem/EntitySimpleItem';
import * as S from './DeletedSimpleItemList.styles';
import { DeletedSimpleItemListProps } from './DeletedSimpleItemList.types';

export const DeletedSimpleItemList: React.FC<DeletedSimpleItemListProps> = ({
  mainKey,
  dataList,
  isLoading,
  onDelete,
  onRestore,
}) => {
  const onClickDelete = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete(id);
    },
    [onDelete],
  );
  const onClickRestore = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onRestore(id);
    },
    [onRestore],
  );

  return (
    <S.Root>
      {dataList?.map(({ id, name }) => (
        <EntitySimpleItem
          key={`${mainKey}-${id}`}
          title={<S.TitleWrapper>{name}</S.TitleWrapper>}
          elementsList={[
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
            {
              key: `${mainKey}-${id}-restore`,
              content: (
                <PrimaryButton
                  IconComponent={IconRotateCcwSvg}
                  variant="secondary"
                  onClick={onClickRestore(id)}
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
