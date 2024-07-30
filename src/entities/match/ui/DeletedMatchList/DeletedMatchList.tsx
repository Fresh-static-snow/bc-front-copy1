import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';

import { PreDeletedMatch, PreDeletedSegment } from '@/shared/types/entities.types';
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
    onDelete(matches.filter((match) => checkedItems.includes(match.id)));
  }, [checkedItems, matches, onDelete]);

  const onClickRestore = useCallback(() => {
    onRestore(matches.filter((match) => checkedItems.includes(match.id)));
  }, [checkedItems, matches, onRestore]);

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
        {matches?.map((match) => (
          <S.MatchItem key={`${mainKey}-${match.id}`}>
            <S.CheckboxWrapper>
              <S.Separator />
              <Checkbox
                checked={checkedItems.includes(match.id)}
                onChange={onChangeCheckbox(match.id)}
              />
            </S.CheckboxWrapper>

            {match.type === 'Match' && (
              <S.Teams>
                {(match as PreDeletedMatch).team_one_name}
                <span> vs </span>
                {(match as PreDeletedMatch).team_two_name}
              </S.Teams>
            )}

            {match.type === 'Segment' && <S.Teams>{(match as PreDeletedSegment).title}</S.Teams>}
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
