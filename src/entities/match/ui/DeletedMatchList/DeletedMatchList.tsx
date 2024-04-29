import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';

import { Counter } from '@/shared/ui/data-display';
import { Checkbox, PrimaryButton } from '@/shared/ui/inputs';

import * as S from './DeletedMatchList.styles';
import { DeletedMatchListProps } from './DeletedMatchList.types';

export const DeletedMatchList: React.FC<DeletedMatchListProps> = ({
  mainKey,
  matches,
  isLoading,
  onRestore,
  onDelete,
}) => {
  const theme = useTheme();

  const [checkedItems, setCheckedItems] = useState<(number | string)[]>([]);

  const onClickDelete = useCallback(() => {
    onDelete(checkedItems);
  }, [checkedItems, onDelete]);

  const onClickRestore = useCallback(() => {
    onRestore(checkedItems);
  }, [checkedItems, onRestore]);

  const onChangeCheckbox = useCallback(
    (id: number | string) => () => {
      setCheckedItems((prevItems) => {
        if (prevItems.includes(id)) {
          return prevItems.filter((checkedId: number | string) => checkedId !== id);
        }
        return [...prevItems, id];
      });
    },
    [],
  );

  return (
    <>
      <S.DeletedMatchList>
        {matches?.map(({ id, team_one_name, team_two_name }) => (
          <S.MatchItem key={`${mainKey}-${id}`}>
            <S.CheckboxWrapper>
              <S.Separator />
              <Checkbox checked={checkedItems.includes(id)} onChange={onChangeCheckbox(id)} />
            </S.CheckboxWrapper>

            <S.Teams>
              {team_one_name}
              <span> vs </span>
              {team_two_name}
            </S.Teams>
          </S.MatchItem>
        ))}
      </S.DeletedMatchList>

      <S.ButtonsWrapper>
        <PrimaryButton
          label="Delete"
          variant="secondary"
          onClick={onClickDelete}
          disabled={isLoading || checkedItems.length === 0}
        />
        <PrimaryButton
          label="Recover"
          variant="primary"
          onClick={onClickRestore}
          AdditionalComponent={
            <Counter
              count={checkedItems.length}
              bgColor={theme.appColors.primary_05}
              color={theme.appColors.primary_01}
            />
          }
          disabled={isLoading || checkedItems.length === 0}
        />
      </S.ButtonsWrapper>
    </>
  );
};
