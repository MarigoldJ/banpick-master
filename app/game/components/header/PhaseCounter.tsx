"use client";

import useGame from "@/app/hooks/useGame";

const PhaseCounter = () => {
  const game = useGame();

  return (
    <div className="text-base text-neutral-400 font-bold">
      Phase {game.game.phase}
    </div>
  );
};

export default PhaseCounter;
