import Filters from "@/app/(home)/games/_components/filters";
import { Game as GameInterface } from "@/types";
import type { Params } from "@/types";
import dynamic from "next/dynamic";
import { gamesMockData } from "../mock";
import GameThumbnailLink from "@/app/(home)/games/_components/game-thumbnail-link";

interface Game {
  name: string;
  slug: string;
  year: string;
  developer: string;
  description: string;
  image: string;
}

const LazyLoader = dynamic(
  () => import("@/app/(home)/games/_components/lazy-loader")
);

async function getData(params: Params) {
  "use server";
  const games: Game[] = [...gamesMockData];
  return { games };
}

export default async function Home(params: Params) {
  const {
    params: { filters: pathParams },
  } = params;
  const { games } = await getData(params);

  return (
    <main>
      <div className="px-10">
        <Filters params={pathParams} />
        <div
          id="gamesContainer"
          className="grid gap-4 grid-cols-4 grid-rows-auto"
        >
          {games.map((game: GameInterface) => (
            <GameThumbnailLink key={game.slug} game={game} />
          ))}
        </div>
        <LazyLoader />
      </div>
    </main>
  );
}
