"use client";

import useGame from "@/app/hooks/useGame";
import PhaseCounter from "./header/PhaseCounter";
import Timer from "./header/Timer";

interface HeaderProps {
  blueName: string | null;
  redName: string | null;
}

const Header: React.FC<HeaderProps> = ({ blueName, redName }) => {
  const phase = useGame((state) => state.game.phase);

  return (
    <div className="flex flex-row justify-between w-full p-5">
      <div className="text-3xl font-bold text-blue-800">{blueName}</div>

      <div
        className={`
        flex flex-col items-center
        ${1 <= phase && phase <= 20 ? "visible" : "invisible"}
      `}
      >
        <PhaseCounter />
        <Timer startSeconds={30} />
      </div>

      <div className="text-3xl font-bold text-red-800">{redName}</div>
    </div>
  );
};

export default Header;
