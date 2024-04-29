import { PrimarySelectableValue } from '@/shared/types/values.types';

export type AvatarBadgeProps = {
  /**
   * The type indicates in which part of the component the additional element is used.
   * This can be useful when customizing the styles or functionality of the passed component.
   */
  type?: 'option' | 'input' | 'chip';
  option: PrimarySelectableValue;
};
