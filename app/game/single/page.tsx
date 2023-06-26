"use client";

import { useSearchParams } from "next/navigation";
import GameHeader from "../components/GameHeader";
import GameBody from "../components/GameBody";

export default function Page() {
  const params = useSearchParams();

  return (
    <div className="w-screen h-screen bg-neutral-50 flex justify-center">
      <div className="flex flex-col w-full xl:w-[1280px]">
        <div id="header-wrapper" className="h-1/5">
          <GameHeader
            blueName={params.get("blueName")}
            redName={params.get("redName")}
          />
        </div>

        <div id="body-wrapper" className="h-4/5">
          <GameBody />
        </div>
      </div>
    </div>
  );
}
