import { useCallback, useState } from 'react';

export const useToggle = (defaultValue?: boolean): [boolean, (newValue?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = useCallback((newValue?: boolean) => {
    setValue((currentValue) => (typeof newValue === 'boolean' ? newValue : !currentValue));
  }, []);

  return [value, toggleValue];
};
