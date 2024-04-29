import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

export const useSize = (
  ref: React.MutableRefObject<HTMLDivElement>,
): undefined | DOMRectReadOnly => {
  const [size, setSize] = useState<DOMRectReadOnly>();

  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }

    const observer = new ResizeObserver(
      debounce(([entry]: ResizeObserverEntry[]) => setSize(entry.contentRect), 50),
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return size;
};
