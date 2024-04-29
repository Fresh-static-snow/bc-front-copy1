import { Accordion } from '@/shared/ui/data-display/Accordion/Accordion';

import * as S from './NavigationMenuAccordionButton.styles';
import { NavigationMenuAccordionButtonProps } from './NavigationMenuAccordionButton.types';

export const NavigationMenuAccordionButton: React.FC<NavigationMenuAccordionButtonProps> = ({
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
