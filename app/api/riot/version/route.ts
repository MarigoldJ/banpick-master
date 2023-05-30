import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  let data = (await res.json()) as Array<string>;

  return NextResponse.json({ data });
}