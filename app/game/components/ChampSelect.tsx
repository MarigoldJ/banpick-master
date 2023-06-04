"use client";

import useRiotApi from "@/app/hooks/useRiotApi";
// import useRiotApi from "@/app/hooks/useRiotApi";
import { ChampType } from "@/app/types";
import { useEffect, useState } from "react";
import ChampSelectCell from "./ChampSelectCell";
import useGame from "@/app/hooks/useGame";

interface ChampSelectProps {
  version: string;
}

const ChampSelect: React.FC<ChampSelectProps> = ({ version }) => {
  const [champList, setChampList] = useState<Array<ChampType>>([]);

  const riotApi = useRiotApi();
  const game = useGame();

  useEffect(() => {
    riotApi.getChampList(version).then((newChampList) => {
      setChampList(newChampList);
    });
  }, [version]);

  const handleClick = () => {
    game.onNext();
  };

  return (
    <div className="flex flex-col">
      <div className="text-neutral-300 text-center">Patch v{version}</div>
      {/* add SearchBox */}
      <div className="mx-2 pt-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-5 h-[60vh] overflow-y-scroll max-w-4xl">
        {/* add ChampCell */}
        {champList.map((champData) => (
          <ChampSelectCell champ={champData} key={`cell-${champData.id}`} />
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center">
        <button className="p-2 border-2 flex-none " onClick={handleClick}>
          Next Phase
        </button>
      </div>
    </div>
  );
};

export default ChampSelect;
