import { useState } from 'react';

import { IconChevronLeftSvg } from '@/shared/assets';
import { Rotate } from '@/shared/ui/layouts/Rotate/Rotate';

import * as S from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

export const Accordion: React.FC<AccordionProps> = ({
  children,
  summaryLabel,
  summaryColor,
  reversed,
  padding,
  hoverable,
  withoutBorder,
  dashedBorder,
  defaultExpandedStatus = false,
  startRotationPositionDeg = 0,
  endRotationPositionDeg,
}) => {
  const [expanded, setExpanded] = useState(defaultExpandedStatus);

  const onChangeExpanded = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <S.Root
      disableGutters
      square
      $withoutBorder={withoutBorder}
      $dashedBorder={dashedBorder}
      expanded={expanded}
      onChange={onChangeExpanded}
      TransitionProps={{ unmountOnExit: true }}
    >
      <S.AccordionSummary
        expandIcon={
          <Rotate rotateDeg={-90 + startRotationPositionDeg}>
            <IconChevronLeftSvg />
          </Rotate>
        }
        $reversed={reversed}
        $padding={padding}
        $hoverable={hoverable}
        $summaryColor={summaryColor}
        $endRotationPositionDeg={endRotationPositionDeg}
      >
        {summaryLabel}
      </S.AccordionSummary>

      <S.AccordionDetails>{children}</S.AccordionDetails>
    </S.Root>
  );
};
