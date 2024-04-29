import {
  CascaderMixedValue,
  CascaderPrimaryValue,
  CascaderSubValue,
} from '@/shared/types/values.types';

/**
 * The function returns an array of active options for the cascading select with parent and child options.
 * @param options - parent options.
 * @param subOptions - child options.
 */
export const getCascadingActiveOptions = (
  options: CascaderPrimaryValue[],
  subOptions: CascaderSubValue[],
): CascaderMixedValue[] => {
  const activeParentsOptions = [] as CascaderPrimaryValue[];
  // * If the child option has a parent option, then we check if all the child options are selected.
  options.forEach((participant) => {
    const newArr = subOptions?.filter((item) => item?.parents?.includes(participant?.value));

    // * If all child options are selected, then we add the parent option to the array.
    if (newArr?.length === participant.children?.length) {
      activeParentsOptions.push(participant);
    }
  });

  return [...activeParentsOptions, ...subOptions] as CascaderMixedValue[];
};
