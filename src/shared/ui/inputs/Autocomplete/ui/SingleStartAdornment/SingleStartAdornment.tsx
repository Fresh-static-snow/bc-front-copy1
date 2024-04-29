import * as S from './SingleStartAdornment.styles';
import { SingleStartAdornmentProps } from './SingleStartAdornment.types';

export const SingleStartAdornment: React.FC<SingleStartAdornmentProps> = ({
  AdditionalElement,
  option,
}) => (
  <S.Root>
    {option && AdditionalElement && <AdditionalElement option={option} type="input" />}
  </S.Root>
);
