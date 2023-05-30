"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-row justify-between w-full p-5">
        <div>{params.get("blueName")}</div>
        <div>타이머</div>
        <div>{params.get("redName")}</div>
      </div>
      <div>챔피언리스트</div>
    </div>
  );
}
