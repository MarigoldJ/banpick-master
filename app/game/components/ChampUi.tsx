import ChampSelect from "./ChampSelect";
import TeamSelect from "./TeamSelect";

const ChampUi = () => {
  return (
    <div className="flex flex-row justify-between w-full p-5">
      <TeamSelect />
      <ChampSelect />
      <TeamSelect />
    </div>
  );
};

export default ChampUi;
