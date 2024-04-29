import { useCallback } from 'react';

import { IconEditSvg, IconTrashSvg } from '@/shared/assets';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton, Switch } from '@/shared/ui/inputs';

import { EntitySimpleItem } from '../EntitySimpleItem/EntitySimpleItem';
import * as S from './EditEntitySwitchableList.styles';
import { EditEntitySwitchableListProps } from './EditEntitySwitchableList.types';

export const EditEntitySwitchableList: React.FC<EditEntitySwitchableListProps> = ({
  mainKey,
  dataList,
  isLoading,
  onSwitch,
  onEdit,
  onDelete,
}) => {
  const onClickSwitch = useCallback(
    (id: number | string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        onSwitch(id);
      }
    },
    [onSwitch],
  );
  const onClickEdit = useCallback((id: number | string) => () => onEdit(id), [onEdit]);
  const onClickDelete = useCallback((id: number | string) => () => onDelete(id), [onDelete]);

  return (
    <S.Root>
      {dataList?.map(({ label, value, additional }) => (
        <EntitySimpleItem
          key={`${mainKey}-${value}`}
          title={label}
          elementsList={[
            {
              key: `${mainKey}-${value}-switch`,
              content: (
                <S.SwitchWrapper>
                  <Switch
                    checked={additional === 'true'}
                    onChange={onClickSwitch(value)}
                    disabled={isLoading}
                  />
                </S.SwitchWrapper>
              ),
            },
            {
              key: `${mainKey}-${value}-edit`,
              content: (
                <PrimaryButton
                  IconComponent={IconEditSvg}
                  variant="secondary"
                  onClick={onClickEdit(value)}
                  isLoading={isLoading}
                  data-testid="Edit"
                />
              ),
            },
            {
              key: `${mainKey}-${value}-delete`,
              content: (
                <PrimaryButton
                  IconComponent={IconTrashSvg}
                  variant="secondary"
                  onClick={onClickDelete(value)}
                  isLoading={isLoading}
                  data-testid="Delete"
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
