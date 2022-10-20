import { useCallback, useEffect, useState } from 'react';

export const useStorage = <T extends string>(
  key: string,
  defaultVal: T,
): [T | null, (s: T) => void] => {
  const [val, setVal] = useState<T | null>(null);

  useEffect(() => {
    try {
      const storageVal = localStorage.getItem(key);
      setVal((storageVal as T) || defaultVal);
    } catch (e) {
      setVal(defaultVal);
    }
  }, [defaultVal, key]);

  const setStorageVal = useCallback(
    (val: T) => {
      try {
        setVal(val);
        localStorage.setItem(key, val);
      } catch (e) {
        console.error(e);
      }
    },
    [key],
  );

  return [val, setStorageVal];
};
