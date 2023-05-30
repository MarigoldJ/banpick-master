import axios from "axios";
import { ChampType } from "../types";

const useRiotApi = () => {
  // Get LOL Patch Version List
  const getVersionList = async () => {
    const res = await axios.get("/api/riot/version");
    const result = res.data.data.filter(
      (patch: string) =>
        !patch.startsWith("lolpatch") && !patch.startsWith("0.")
    );

    return result as Array<string>;
  };

  // Get Latest LOL Patch Version
  const getLatestVersion = async () => {
    const res = await axios.get("/api/riot/version");
    const result = res.data.data[0];
    return result as string;
  };

  // Get Champion List of Selected Patch Version
  const getChampList = async (version: string) => {
    // const res = await axios.get(`/api/riot/champ?ver=${version}`);
    // const result = res.data.data.data as Object;
    const res = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );
    return res.json().then((data) => {
      return Object.values(data.data as Array<ChampType>).sort(
        (a: ChampType, b: ChampType) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      ) as Array<ChampType>;
    });
  };

  return {
    getVersionList,
    getLatestVersion,
    getChampList,
  };
};

export default useRiotApi;
