import { useCallback } from 'react';

import { IconRotateCcwSvg, IconTrashSvg } from '@/shared/assets';
import { RelatedEventsContent } from '@/shared/ui/data-display';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

import { EntityAccordionItem } from '../EntityAccordionItem/EntityAccordionItem';
import * as S from './DeletedAccordionItemList.styles';
import { DeletedAccordionItemListProps } from './DeletedAccordionItemList.types';

export const DeletedAccordionItemList: React.FC<DeletedAccordionItemListProps> = ({
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
      {dataList?.map(({ id, name, events_count, related_events }) => (
        <EntityAccordionItem
          key={`${mainKey}-${id}`}
          title={<S.TitleWrapper>{name}</S.TitleWrapper>}
          content={
            <S.ContentWrapper>
              <RelatedEventsContent events_count={events_count} related_events={related_events} />
            </S.ContentWrapper>
          }
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
