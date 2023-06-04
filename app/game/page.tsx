"use client";

import { useSearchParams } from "next/navigation";
import Header from "./components/Header";
import ChampUi from "./components/ChampUi";
import useGame from "../hooks/useGame";

export default function Page() {
  const params = useSearchParams();

  return (
    <div className="w-screen h-screen bg-neutral-50 flex justify-center">
      <div className="flex flex-col w-full xl:w-[1280px]">
        <div id="header" className="h-1/5 flex flex-col items-center p-5">
          <Header
            blueName={params.get("blueName")}
            redName={params.get("redName")}
          />
        </div>

        <div id="body" className="h-4/5">
          <ChampUi />
        </div>
      </div>
    </div>
  );
}
