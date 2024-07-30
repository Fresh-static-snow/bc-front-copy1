import { AccordionItem } from '../AccordionItem/AccordionItem';
import * as S from './AccordionList.styles';
import { AccordionListProps } from './AccordionList.types';

export const AccordionList: React.FC<AccordionListProps> = ({
  children,
  title,
  count,
  defaultExpandedStatus,
}) => (
  <AccordionItem title={title} count={count} defaultExpandedStatus={defaultExpandedStatus}>
    <S.ItemList>{children}</S.ItemList>
  </AccordionItem>
);
