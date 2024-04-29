import * as S from './CalendarGrid.styles';
import { CalendarGridProps } from './CalendarGrid.types';

export const CalendarGrid: React.FC<CalendarGridProps> = ({ children, columns }) => (
  <S.Root $columns={columns}>{children}</S.Root>
);
