"use client";

import dynamic from "next/dynamic";
// import ChampSelect from "./ChampSelect";
import TeamSelect from "./TeamSelect";

const DynamicChampSelect = dynamic(() => import("./ChampSelect"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ChampUi = () => {
  return (
    <div className="flex flex-row justify-between w-full p-5">
      <TeamSelect />
      <DynamicChampSelect version={"13.10.1"} />
      <TeamSelect />
    </div>
  );
};

export default ChampUi;
