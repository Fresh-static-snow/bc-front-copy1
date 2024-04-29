import { useEffect, useRef } from 'react';
import { EventType } from 'react-hook-form';

export const useEventListener = (
  eventType: EventType,
  callback: (event: Event) => void,
  element: MediaQueryList | null,
) => {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = callback;
  }, [callback]);

  useEffect(() => {
    const isSupported = !!element && !!element.addEventListener;
    if (!isSupported) {
      return () => {};
    }

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventType, eventListener);

    return () => {
      element.removeEventListener(eventType, eventListener);
    };
  }, [eventType, element]);
};
