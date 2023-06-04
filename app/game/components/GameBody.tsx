"use client";

import dynamic from "next/dynamic";
// import ChampSelect from "./ChampSelect";
import TeamSelect from "./body/TeamSelect";

const DynamicChampSelect = dynamic(() => import("./body/ChampSelect"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ChampUi = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="w-1/4 h-full">
        <TeamSelect team="blue" />
      </div>
      <div className="w-2/4 h-full">
        <DynamicChampSelect version={"13.10.1"} />
      </div>
      <div className="w-1/4 h-full">
        <TeamSelect team="red" />
      </div>
    </div>
  );
};

export default ChampUi;
