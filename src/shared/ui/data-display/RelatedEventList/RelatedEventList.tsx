import { useMemo } from 'react';

import * as S from './RelatedEventList.styles';
import { RelatedEventListProps } from './RelatedEventList.types';

export const RelatedEventList: React.FC<RelatedEventListProps> = ({ title, content }) => {
  const shortContent = useMemo(() => {
    if (Array.isArray(content)) {
      return content.slice(0, 15);
    }

    return content;
  }, [content]);

  return (
    <S.Root>
      <S.ItemLabel>{title}</S.ItemLabel>
      {content && (
        <S.ItemValue>
          {Array.isArray(shortContent) ? (
            <S.List>
              {shortContent?.map(({ id, title: contentTitle }) => (
                <S.ListElement key={id}>{contentTitle}</S.ListElement>
              ))}

              {content.length > 15 && <S.Count>+{content.length - 15} events</S.Count>}
            </S.List>
          ) : (
            shortContent
          )}
        </S.ItemValue>
      )}
    </S.Root>
  );
};
