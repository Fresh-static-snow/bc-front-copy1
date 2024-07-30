import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';

import { Counter } from '@/shared/ui/data-display';
import { Checkbox, PrimaryButton } from '@/shared/ui/inputs';

import * as S from './DeletedSegmentList.styles';
import { DeletedSegmentListProps } from './DeletedSegmentList.types';

export const DeletedSegmentList: React.FC<DeletedSegmentListProps> = ({
  mainKey,
  segments,
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
      <S.DeletedSegmentList>
        {segments?.map(({ id, title }) => (
          <S.SegmentItem key={`${mainKey}-${id}`}>
            <S.CheckboxWrapper>
              <S.Separator />
              <Checkbox checked={checkedItems.includes(id)} onChange={onChangeCheckbox(id)} />
            </S.CheckboxWrapper>

            <S.Title>{title}</S.Title>
          </S.SegmentItem>
        ))}
      </S.DeletedSegmentList>

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
