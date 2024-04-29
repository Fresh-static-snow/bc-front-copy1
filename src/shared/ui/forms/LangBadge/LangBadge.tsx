import * as S from './LangBadge.styles';
import { LangBadgeProps } from './LangBadge.types';

/**
 * The badge component which displays the language in the option or select.
 */
export const LangBadge: React.FC<LangBadgeProps> = ({ option }) => (
  <S.Root>{option.additional}</S.Root>
);
