"use client";

import { useSearchParams } from "next/navigation";
import Header from "./components/Header";
import ChampUi from "./components/ChampUi";

export default function Page() {
  const params = useSearchParams();

  return (
    <div className="flex flex-col items-center h-screen">
      <Header
        blueName={params.get("blueName")}
        redName={params.get("redName")}
      />
      <ChampUi />
    </div>
  );
}
