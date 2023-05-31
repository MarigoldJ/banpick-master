export type ChampType = {
  blurb: string;
  id: string;
  image: {
    full: string;
    sprite: string;
    h: number;
    w: number;
    x: number;
    y: number;
  };
  key: string;
  name: string;
  partype: string;
  tags: string[];
  title: string;
};

export type GameType = {
  isBlueReady: boolean;
  isRedReady: boolean;
  phase: number;
  blueName: string;
  redName: string;
  lastTime: number;
  selected: Array<string>;
};
