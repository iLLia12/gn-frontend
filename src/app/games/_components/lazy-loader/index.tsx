"use client";
import { useEffect, useRef, useState } from "react";
import { gamesFactory } from "../../mock";
import { Game } from "@/types";
import GameThumbnailLink from "@/app/games/_components/game-thumbnail-link";
import ReactDOM from "react-dom/client";
import Loader from "@/components/loader";

async function getGames(): Promise<Game[]> {
  console.log("Loading...");
  const promise = new Promise<Game[]>((resole, reject) => {
    const games = gamesFactory();
    setTimeout(() => {
      resole(games);
    }, 500);
  });
  return promise;
}

const LazyLoader = () => {
  const lazyLoadingTrigger = useRef<HTMLElement | null>(null);
  const gamesContainer = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    lazyLoadingTrigger.current = document.getElementById("lazyLoadingTrigger");
    gamesContainer.current = document.getElementById("gamesContainer");
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setIsLoading(true);
          const games = await getGames();
          setIsLoading(false);
          games.forEach((game: Game) => {
            const link = <GameThumbnailLink game={game} />;
            const container = document.createElement("div");
            const root = ReactDOM.createRoot(container);
            root.render(link);
            gamesContainer.current?.appendChild(container);
          });
        }
      },
      {
        rootMargin: "0px",
        threshold: 0,
        root: null,
      }
    );

    if (lazyLoadingTrigger.current) {
      observer.observe(lazyLoadingTrigger.current);
    }

    return () => {
      if (lazyLoadingTrigger.current) {
        observer.unobserve(lazyLoadingTrigger.current);
      }
    };
  }, []);

  return (
    <>
      <div id="lazyLoadingTrigger"></div>
      {isLoading && (
        <div className="relative bottom-14 w-full">
          <div className="flex justify-center">
            <div className="inline-block rounded-full bg-slate-400">
              <Loader />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LazyLoader;
