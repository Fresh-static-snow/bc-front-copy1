import { Accordion } from '@/shared/ui/data-display';

import * as S from './AccordionItem.styles';
import { AccordionItemProps } from './AccordionItem.types';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  title,
  count,
  defaultExpandedStatus,
}) => (
  <Accordion
    summaryLabel={
      <S.AccordionSummary>
        <S.Label>{title}</S.Label>
        <S.Count>{count ?? 0}</S.Count>
      </S.AccordionSummary>
    }
    reversed
    withoutBorder
    padding="15px 24px"
    hoverable
    defaultExpandedStatus={defaultExpandedStatus}
  >
    {children}
  </Accordion>
);
