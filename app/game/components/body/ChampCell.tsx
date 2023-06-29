"use client";

import { ChampType } from "@/app/types";
import ChampImg from "./ChampImg";
import useGame from "@/app/hooks/useGame";
import { useState } from "react";

interface ChampSelectCellProps {
  champ: ChampType;
}

const ChampCell: React.FC<ChampSelectCellProps> = ({ champ }) => {
  const game = useGame();

  const handleClick = () => {
    if (1 <= game.game.phase && game.game.phase <= 20) {
      if (!game.game.selected.includes(champ.id)) {
        game.onSelect(champ.id);
      }
    }
  };

  return (
    <div
      className={`
        col-span-1 flex flex-col items-center transition
        ${
          game.game.selected.includes(champ.id)
            ? "brightness-50 grayscale"
            : "hover:bg-white hover:opacity-50 hover:cursor-pointer"
        }
      `}
      onClick={handleClick}
    >
      <ChampImg champId={champ.id} type="square" alt="champselect" />
      <div className="text-center font-semibold text-xs md:text-sm">
        {champ.name}
      </div>
    </div>
  );
};

export default ChampCell;
