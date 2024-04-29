import { useEffect, useRef } from 'react';

export const useOnLoadingComplete = (isLoading: boolean, callback: () => void) => {
  const prevIsLoading = useRef(isLoading);

  useEffect(() => {
    if (prevIsLoading.current && !isLoading) {
      callback();
    }

    prevIsLoading.current = isLoading;
  }, [isLoading, callback]);
};
