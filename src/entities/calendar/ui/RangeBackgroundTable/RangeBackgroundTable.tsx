import { nanoid } from 'nanoid';
import { useMemo } from 'react';

import * as S from './RangeBackgroundTable.styles';
import { RangeBackgroundTableProps } from './RangeBackgroundTable.types';

export const RangeBackgroundTable: React.FC<RangeBackgroundTableProps> = ({
  tableHeight,
  tablePaddings,
  columnsCount,
  children,
  isMobile,
}) => {
  const columns = useMemo(() => {
    const cols = [] as string[];

    for (let i = 0; i < columnsCount; i += 1) {
      cols.push(nanoid());
    }

    return cols;
  }, [columnsCount]);

  return (
    <S.Root $height={tableHeight} $padding={tablePaddings} $isMobile={isMobile}>
      <div />

      <S.TableContent $columnsCount={columnsCount}>
        {columns?.map((elem) => (
          <S.TableColumn key={elem} />
        ))}
      </S.TableContent>

      <S.TableRows $isMobile={isMobile}>{children}</S.TableRows>
    </S.Root>
  );
};
