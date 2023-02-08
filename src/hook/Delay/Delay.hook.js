import { useEffect, useState } from "react";

export const useDelay = (delay) => {
  const [timeoutEnded, setTimeoutEnded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutEnded(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return timeoutEnded;
};
