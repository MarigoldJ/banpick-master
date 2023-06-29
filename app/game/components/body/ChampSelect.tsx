"use client";

import useRiotApi from "@/app/hooks/useRiotApi";
// import useRiotApi from "@/app/hooks/useRiotApi";
import { ChampType } from "@/app/types";
import { useEffect, useState } from "react";
import ChampCell from "./ChampCell";
import useGame from "@/app/hooks/useGame";
import SubmitButton from "@/app/components/SubmitButton";

interface ChampSelectProps {
  version: string;
}

const ChampSelect: React.FC<ChampSelectProps> = ({ version }) => {
  const [champList, setChampList] = useState<Array<ChampType>>([]);
  const [searchName, setSearchName] = useState<string>("");

  const riotApi = useRiotApi();
  const game = useGame();

  useEffect(() => {
    riotApi.getChampList(version).then((newChampList) => {
      setChampList(newChampList);
    });
  }, [version]);

  const isStartWithSearchName = (champ: ChampType) =>
    champ.name.startsWith(searchName);
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchName(event.target.value);
  };

  const handleNextBtn = () => {
    if (game.game.selected[game.game.phase]) {
      game.onNext();
    }
  };

  const handleReadyBtn = () => {
    // TODO: add code for multi mode.
    game.onNext();
  };

  const nextButton = (phase: number) => {
    if (1 <= phase && phase <= 20) {
      return <SubmitButton label="Next Phase" onClick={handleNextBtn} />;
    } else if (phase === 0) {
      return <SubmitButton label="Ready" onClick={handleReadyBtn} />;
    } else {
      return <></>;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-neutral-300 text-center">Patch v{version}</div>
      <div id="searchbox" className="flex justify-center">
        <input
          className="p-4 m-2 border-2 rounded-md outline-none transition focus:border-black"
          onChange={handleSearch}
          value={searchName}
        />
      </div>
      {/* add SearchBox */}
      <div className="mx-2 pt-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-5 h-[60vh] overflow-y-scroll max-w-4xl">
        {/* add ChampCell */}
        {champList.filter(isStartWithSearchName).map((champData) => (
          <ChampCell champ={champData} key={`cell-${champData.id}`} />
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center">
        {nextButton(game.game.phase)}
      </div>
    </div>
  );
};

export default ChampSelect;
