"use client";

import { useSearchParams } from "next/navigation";
import Header from "./components/Header";

export default function Page() {
  const params = useSearchParams();

  return (
    <div className="flex flex-col items-center h-screen">
      <Header
        blueName={params.get("blueName")}
        redName={params.get("redName")}
      />
      <div>챔피언리스트</div>
    </div>
  );
}
