"use client";

import useRiotApi from "@/app/hooks/useRiotApi";
// import useRiotApi from "@/app/hooks/useRiotApi";
import { ChampType } from "@/app/types";
import { useEffect, useState } from "react";
import ChampSelectCell from "./ChampSelectCell";

interface ChampSelectProps {
  version: string;
}

const ChampSelect: React.FC<ChampSelectProps> = ({ version }) => {
  const [champList, setChampList] = useState<Array<ChampType>>([]);

  const riotApi = useRiotApi();

  useEffect(() => {
    riotApi.getChampList(version).then((newChampList) => {
      setChampList(newChampList);
    });
  }, [version]);

  return (
    <div className="flex flex-col">
      <div className="text-neutral-300 text-center">Patch v{version}</div>
      {/* add SearchBox */}
      <div className="w-full mx-2 pt-10 grid grid-cols-7 gap-5">
        {/* add ChampCell */}
        {champList.map((champData) => (
          <ChampSelectCell champ={champData} />
        ))}
      </div>
    </div>
  );
};

export default ChampSelect;
