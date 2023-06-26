"use client";

import useGame from "@/app/hooks/useGame";
import { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(30);
  const lastTime = useGame((state) => state.game.lastTime);

  useEffect(() => {
    setSeconds(Math.round((lastTime + 30 * 1000 - Date.now()) * 0.001));
  }, [lastTime]);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds < 0) {
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [seconds, lastTime]);

  return (
    <div className="text-2xl text-neutral-500 font-bold">{`:${seconds}`}</div>
  );
};

export default Timer;
