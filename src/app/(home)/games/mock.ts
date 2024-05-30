export const gamesMockData = [
  {
    name: "Broforce",
    slug: "broforce",
    year: "2015",
    developer: "Free Lives",
    description:
      "Broforce is a side-scrolling run-and-gun platform video game developed by Free Lives and published by Devolver Digital.",
    image: "/assets/images/broforce/thumbnail.jpeg",
  },
  {
    name: "Contra",
    slug: "contra",
    year: "2015",
    developer: "Free Lives",
    description:
      "Contra is a run-and-gun video game developed and published by Konami, originally developed as a coin-operated arcade video game in 1986 and released on February 20, 1987",
    image: "/assets/images/contra/thumbnail.jpeg",
  },
  {
    name: "Super Mario Bros.",
    slug: "super-mario-bros",
    year: "2015",
    developer: "Free Lives",
    description:
      "Super Mario Bros. is a platform game developed and published in 1985 by Nintendo for the Famicom in Japan and for the Nintendo Entertainment System (NES) in North America.",
    image: "/assets/images/mario/thumbnail.jpeg",
  },
  {
    name: "Contra 6",
    slug: "contra-6",
    year: "2015",
    developer: "Free Lives",
    description:
      "Contra Force is an run and gun game released by Konami for the Nintendo Entertainment System in 1992 in North America",
    image: "/assets/images/contra6/thumbnail.jpeg",
  },
  {
    name: "Broforce",
    slug: "broforce3232",
    year: "2015",
    developer: "Free Lives",
    description: "description",
    image: "/assets/images/broforce/broforce.jpg",
  },
  ...gamesFactory(),
];

export function gamesFactory() {
  const games = [];
  let i = 2;
  while (i < 20) {
    games.push({
      name: "Broforce",
      slug: `broforce${i}`,
      year: "2015",
      developer: "Free Lives",
      description: "description",
      image: "/assets/images/broforce/broforce.jpg",
    });
    i++;
  }
  return games;
}
