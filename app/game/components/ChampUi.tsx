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
    <div className="flex flex-row max-h-full">
      <TeamSelect team="blue" />
      <DynamicChampSelect version={"13.10.1"} />
      <TeamSelect team="red" />
    </div>
  );
};

export default ChampUi;
