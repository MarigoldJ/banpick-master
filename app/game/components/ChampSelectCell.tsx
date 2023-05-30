import { ChampType } from "@/app/types";
import ChampImg from "./ChampImg";

interface ChampSelectCellProps {
  champ: ChampType;
}

const ChampSelectCell: React.FC<ChampSelectCellProps> = ({ champ }) => {
  return (
    <div className="col-span-1 flex flex-col items-center hover:bg-white hover:opacity-50 hover:cursor-pointer transition">
      <ChampImg champId={champ.id} type="square" />
      <div className="text-center font-semibold">{champ.name}</div>
    </div>
  );
};

export default ChampSelectCell;
