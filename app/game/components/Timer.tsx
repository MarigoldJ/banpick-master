"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  startSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ startSeconds }) => {
  const [seconds, setSeconds] = useState<number>(startSeconds);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [seconds, startSeconds]);

  return (
    <div className="text-2xl text-neutral-500 font-bold">{`:${seconds}`}</div>
  );
};

export default Timer;
