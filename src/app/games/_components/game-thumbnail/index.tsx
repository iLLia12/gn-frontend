import Image from "next/image";
import { Game as GameInterface } from "@/types";

const GameThumbnail = ({
  name,
  year,
  developer,
  description,
  image,
}: GameInterface) => {
  return (
    <div
      className="shadow shadow-gray-200 flex rounded"
      style={{ height: "100px" }}
    >
      <div className="w-2/5 flex place-content-center p-1">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="w-3/5 p-1">
        <div className="font-semibold	text-slate-700">{name}</div>
        <div className="text-xs text-gray-400 overflow-hidden h-12">
          {description}
        </div>
        <div className="flex justify-end">
          <div className="text-xs text-gray-400	">{developer}</div>
          <div className="text-xs text-gray-400	">({year})</div>
        </div>
      </div>
    </div>
  );
};

export default GameThumbnail;
