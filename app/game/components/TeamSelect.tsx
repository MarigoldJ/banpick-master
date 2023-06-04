"use client";

import useGame from "@/app/hooks/useGame";
import ChampImg from "./ChampImg";

interface TeamSelectProps {
  team: "blue" | "red";
}

const TeamSelect: React.FC<TeamSelectProps> = ({ team }) => {
  const game = useGame();

  let pickPhase: Array<number> = [];
  let banPhase: Array<number> = [];

  if (team === "blue") {
    pickPhase = [7, 10, 11, 18, 19];
    banPhase = [1, 3, 5, 14, 16];
  }
  if (team === "red") {
    pickPhase = [8, 9, 12, 17, 20];
    banPhase = [15, 13, 6, 4, 2];
  }

  return (
    <div className="flex flex-col items-center">
      <div id={`${team}-pick`} className="">
        <div className="flex flex-row">
          {banPhase.map((phase) => (
            <div
              key={`phase-${phase}`}
              className={`
              border-2
              ${phase === game.game.phase ? "bg-neutral-500 animate-pulse" : ""}
            `}
            >
              <ChampImg
                champId={game.game.selected[phase]}
                type="square"
                alt="team"
              />
            </div>
          ))}
        </div>
      </div>
      {pickPhase.map((phase) => (
        <div key={`phase-${phase}`} className="h-1/6">
          <div
            className={`
              border-2
              ${phase === game.game.phase ? "bg-neutral-500 animate-pulse" : ""}
              overflow-hidden
              w-full
              h-full
            `}
          >
            <ChampImg
              champId={game.game.selected[phase]}
              type="horizon"
              alt="team"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSelect;
