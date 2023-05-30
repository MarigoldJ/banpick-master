import Image from "next/image";

interface ChampImgProps {
  type: "square" | "horizon" | "vertical";
  champId: string;
}

const ChampImg: React.FC<ChampImgProps> = ({ type, champId }) => {
  let image = <></>;
  const version = "13.10.1";

  if (type === "square") {
    image = (
      <Image
        width={120}
        height={120}
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champId}.png`}
        alt={champId}
      />
    );
  }

  return <div className="">{image}</div>;
};

export default ChampImg;
