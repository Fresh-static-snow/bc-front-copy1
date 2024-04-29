import { useEffect, useState } from 'react';

import { useEventListener } from '../useEventListener/useEventListener.hook';

export const useMediaQuery = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState<boolean>();
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    'change',
    (event: MediaQueryListEvent) => setIsMatch(event.matches),
    mediaQueryList,
  );

  return isMatch;
};
