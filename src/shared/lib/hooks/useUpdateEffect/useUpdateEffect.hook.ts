import { useEffect, useRef } from 'react';

export const useUpdateEffect = (
  callback: React.EffectCallback,
  dependencies: React.DependencyList,
) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    callback();
  }, dependencies);
};
