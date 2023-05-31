import { NextResponse } from "next/server";

export async function GET() {
  const version = "13.10.1";
  const lang = "ko_KR";

  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion.json`
  );
  let data = (await res.json()) as Array<string>;

  return NextResponse.json({ data });
}
