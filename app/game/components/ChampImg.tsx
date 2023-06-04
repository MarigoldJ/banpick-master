import Image from "next/image";

interface ChampImgProps {
  type: "square" | "horizon" | "vertical";
  champId: string;
  alt: string;
}

const ChampImg: React.FC<ChampImgProps> = ({ type, champId, alt }) => {
  let image = <></>;
  const version = "13.10.1";

  if (type === "square") {
    const srcUrl = champId
      ? `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champId}.png`
      : "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC";
    image = (
      <Image
        width={120}
        height={120}
        src={srcUrl}
        alt={`${alt}-${champId}`}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC"
      />
    );
  }
  if (type === "horizon") {
    // TODO: 이미지 URL 변경하고, 크기에 따라서 Image에 들어가는 크기 변경하기.
    const srcUrl = champId
      ? `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champId}.png`
      : "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC";
    image = (
      <Image
        width={120}
        height={120}
        src={srcUrl}
        alt={`${alt}-${champId}`}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC"
      />
    );
  }

  return <div className="">{image}</div>;
};

export default ChampImg;
