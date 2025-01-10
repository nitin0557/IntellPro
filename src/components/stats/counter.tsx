import React, { useState, useEffect } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCounter = () => {
    setCount((prevCount) => (prevCount + 1) % 10);
  };

  useEffect(() => {
    const interval = setInterval(incrementCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{`${count}+`}</>;
};
