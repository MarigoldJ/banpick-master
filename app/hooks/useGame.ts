import { create } from "zustand";
import { GameType } from "../types";

interface GameStore {
  game: GameType;
  onNext: () => void;
  onSelect: (champId: string) => void;
  onBlueReady: () => void;
  onRedReady: () => void;
  onSubmit: () => void;
}

const initialGame: GameType = {
  isBlueReady: false,
  isRedReady: false,
  phase: 0,
  blueName: "",
  redName: "",
  lastTime: Date.now(),
  selected: Array.from({ length: 21 }, () => ""),
};

const useGame = create<GameStore>((set) => ({
  game: initialGame,
  onNext: () =>
    set((state) => ({ game: { ...state.game, phase: state.game.phase + 1 } })),
  onSelect: (champId) =>
    set((state) => {
      state.game.selected[state.game.phase] = champId;
      return { game: { ...state.game } };
    }),
  onBlueReady: () => {
    set((state) => ({
      game: { ...state.game, isBlueReady: !state.game.isBlueReady },
    }));
  },
  onRedReady: () => {
    set((state) => ({
      game: { ...state.game, isRedReady: !state.game.isRedReady },
    }));
  },
  onSubmit: () => {},
}));

export default useGame;
