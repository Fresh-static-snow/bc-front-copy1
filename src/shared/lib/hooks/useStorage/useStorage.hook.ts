import { useCallback, useEffect, useState } from 'react';

import { StorageObject } from './useStorage.types';

export const useStorage = <T>(
  key: string,
  defaultValue: T | (() => T),
  storageObject: StorageObject,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, () => void] => {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue) as T;

    if (typeof defaultValue === 'function') {
      return (defaultValue as () => T)();
    }

    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
    } else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};

export const useLocalStorage = <T>(key: string, defaultValue: T | (() => T)) =>
  useStorage(key, defaultValue, window.localStorage);

export const useSessionStorage = <T>(key: string, defaultValue: T | (() => T)) =>
  useStorage(key, defaultValue, window.sessionStorage);
