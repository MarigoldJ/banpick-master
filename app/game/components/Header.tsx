import Timer from "./Timer";

interface HeaderProps {
  blueName: string | null;
  redName: string | null;
}

const Header: React.FC<HeaderProps> = ({ blueName, redName }) => {
  return (
    <div className="flex flex-row justify-between w-full p-5">
      <div className="text-3xl font-bold text-blue-800">{blueName}</div>
      <Timer startSeconds={30} />
      <div className="text-3xl font-bold text-red-800">{redName}</div>
    </div>
  );
};

export default Header;
