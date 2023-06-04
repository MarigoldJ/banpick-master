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
        alt={`${alt}-${champId}-square`}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC"
      />
    );
  }
  if (type === "horizon") {
    const srcUrl = champId
      ? `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`
      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABL8AAAABCAQAAACV+sQKAAAAGUlEQVR42u3BIQEAAAACIP1/2hcmoAEA4GgS/gACWB//IAAAAABJRU5ErkJggg==";
    image = (
      <Image
        width={1215}
        height={717}
        src={srcUrl}
        alt={`${alt}-${champId}-horizon`}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC"
        className="overflow-clip"
      />
    );
  }

  return <div className="">{image}</div>;
};

export default ChampImg;
