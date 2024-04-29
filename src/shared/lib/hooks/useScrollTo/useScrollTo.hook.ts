import { useEffect, useRef, useState } from 'react';

export const useScrollTo = <T extends Element>(): [
  React.MutableRefObject<T>,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const ref = useRef<T>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScrollTo(false);
    }
  }, [shouldScrollTo]);

  return [ref, setShouldScrollTo];
};
