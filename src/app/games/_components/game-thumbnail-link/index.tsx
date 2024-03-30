import Link from "next/link";
import GameThumbnail from "@/app/games/_components/game-thumbnail";
import { Game as GameInterface } from "@/types";

const GameThumbnailLink = ({ game }: { game: GameInterface }) => {
  return (
    <Link key={game.slug} href={`/games/details/${game.slug}`}>
      <GameThumbnail key={game.slug} {...game} />
    </Link>
  );
};

export default GameThumbnailLink;
