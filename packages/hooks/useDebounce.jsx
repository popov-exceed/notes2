import { useEffect, useState } from "react";

const useDebounce = (initialValue = null, delay = 300, onChange) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    const isEqual = typeof value === "string" && value === debouncedValue;
    if (!isEqual) {
      setIsLoading(true);
      timeoutId = setTimeout(() => {
        if (onChange) {
          onChange(value);
        }
        setDebouncedValue(value);
        setIsLoading(false);
      }, delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value, debouncedValue]);

  return {
    value,
    setValue,
    isLoading,
    debouncedValue,
  };
};

export default useDebounce;
