import { isEqual } from 'lodash';
import { useEffect, useRef } from 'react';

export const useDeepCompareEffect = (
  callback: React.EffectCallback,
  dependencies: React.DependencyList,
) => {
  const currentDependenciesRef = useRef<React.DependencyList>([]);

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
};
