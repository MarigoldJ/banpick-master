"use client";

import useGame from "@/app/hooks/useGame";

const PhaseCounter = () => {
  const game = useGame();

  return <div className="flex-none">phase {game.game.phase}</div>;
};

export default PhaseCounter;
