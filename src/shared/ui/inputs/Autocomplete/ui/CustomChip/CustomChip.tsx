import { IconCrossSvg } from '@/shared/assets';

import * as S from './CustomChip.styles';
import { CustomChipProps } from './CustomChip.types';

/**
 * The component that renders the custom `Chip` in the Autocomplete component.
 */
export const CustomChip: React.FC<CustomChipProps> = ({ AdditionalElement, option }) => (
  <S.Root
    // * `option.props` is the `Chip` props from `useAutocomplete` hook.
    {...option.props}
    variant="outlined"
    // * `deleteIcon` is the `Icon` that is rendered when the `Chip` is deletable.
    deleteIcon={<IconCrossSvg />}
    $invalid={option?.status}
    // * If `AdditionalElement` is passed, it will render the `AdditionalElement` and the `option.label`.
    label={
      AdditionalElement ? (
        <>
          <AdditionalElement option={option} type="chip" />
          {option.label}
        </>
      ) : (
        option.label
      )
    }
  />
);
