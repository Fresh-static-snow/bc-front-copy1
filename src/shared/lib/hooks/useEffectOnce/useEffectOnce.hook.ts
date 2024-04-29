import { useEffect } from 'react';

export const useEffectOnce = (callback: React.EffectCallback) => {
  useEffect(callback, []);
};
