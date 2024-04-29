import { useTheme } from '@emotion/react';
import { Fragment } from 'react';

import { Accordion } from '@/shared/ui/data-display';

import * as S from './EntityAccordionItem.styles';
import { EntityAccordionItemProps } from './EntityAccordionItem.types';

export const EntityAccordionItem: React.FC<EntityAccordionItemProps> = ({
  title,
  content,
  elementsList,
  dashedBorder,
  withoutBorder,
  disabled,
  startRotationPositionDeg,
  endRotationPositionDeg,
}) => {
  const theme = useTheme();

  return (
    <S.Root $dashedBorder={dashedBorder} $withBorder={disabled && !withoutBorder}>
      {disabled ? (
        <S.DisabledWrapper $dashedBorder={dashedBorder}>
          <S.AccordionSummary>
            <S.LeftPart>{title}</S.LeftPart>
            <S.RightPart>
              {elementsList?.map(({ key, content: elementContent }) => (
                <Fragment key={key}>{elementContent}</Fragment>
              ))}
            </S.RightPart>
          </S.AccordionSummary>
        </S.DisabledWrapper>
      ) : (
        <Accordion
          summaryLabel={
            <S.AccordionSummary>
              <S.LeftPart>{title}</S.LeftPart>
              <S.RightPart>
                {elementsList?.map(({ key, content: elementContent }) => (
                  <Fragment key={key}>{elementContent}</Fragment>
                ))}
              </S.RightPart>
            </S.AccordionSummary>
          }
          reversed
          dashedBorder={dashedBorder}
          withoutBorder={withoutBorder}
          padding="7px 0"
          summaryColor={theme.appColors.primary_02}
          startRotationPositionDeg={startRotationPositionDeg}
          endRotationPositionDeg={endRotationPositionDeg}
        >
          {content}
        </Accordion>
      )}
    </S.Root>
  );
};
