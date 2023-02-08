import { useEffect, useState } from "react";

export const useTimeout = (delay, dependencies = []) => {
  if (!Array.isArray(dependencies)) {
    throw new Error("Dependencies must be an array");
  }

  const [timeoutEnded, setTimeoutEnded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutEnded(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, dependencies);

  return timeoutEnded;
};
