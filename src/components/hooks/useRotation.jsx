import { useState, useEffect } from "react";
import { featuresData } from "../../constants/sections";

export const useRotatingFeature = (intervalTime = 10000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuresData.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return featuresData[index];
};
