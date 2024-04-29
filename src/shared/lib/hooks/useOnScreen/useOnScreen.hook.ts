import { useMemo, useState } from 'react';

import { useDeepCompareEffect } from '../useDeepCompareEffect/useDeepCompareEffect.hook';

export const useOnScreen = (
  ref: React.MutableRefObject<HTMLElement>,
  options?: IntersectionObserverInit,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useDeepCompareEffect(() => {
    let observerRefValue: HTMLElement = null;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options,
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue == null) {
        return;
      }

      observer.unobserve(observerRefValue);
    };
  }, [ref, options]);

  return useMemo(() => isVisible, [isVisible]);
};
