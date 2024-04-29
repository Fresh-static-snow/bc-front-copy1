import { useEffect } from 'react';

import { useTimeout } from '../useTimeout/useTimeout.hook';

export const useDebounce = (
  callback: React.EffectCallback,
  delay: number,
  dependencies: React.DependencyList,
) => {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);

  useEffect(clear, [clear]);
};
