import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ver = searchParams.get("ver");
  const lang = "ko_KR";

  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${ver}/data/${lang}/champion.json`
  );
  let data = (await res.json()) as Array<string>;

  return NextResponse.json({ data });
}
