import PhaseCounter from "./PhaseCounter";
import Timer from "./Timer";

interface HeaderProps {
  blueName: string | null;
  redName: string | null;
}

const Header: React.FC<HeaderProps> = ({ blueName, redName }) => {
  return (
    <div className="flex flex-row justify-between w-full p-5">
      <div className="text-3xl font-bold text-blue-800">{blueName}</div>
      <div className="flex flex-col items-center">
        <PhaseCounter />
        <Timer startSeconds={30} />
      </div>

      <div className="text-3xl font-bold text-red-800">{redName}</div>
    </div>
  );
};

export default Header;
