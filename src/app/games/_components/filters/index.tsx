import Link from "next/link";

const FiltersByYear = ({ params }: { params: string[] }) => {
  const filters = [
    {
      name: "1970s",
      slug: "1970s",
    },
    {
      name: "1980s",
      slug: "1980s",
    },
    {
      name: "1990s",
      slug: "1990s",
    },
    {
      name: "2000s",
      slug: "2000s",
    },
    {
      name: "Platform game",
      slug: "platform-game",
    },
    {
      name: "RPG",
      slug: "rpg",
    },
    {
      name: "Fighting",
      slug: "fighting",
    },
    {
      name: "Adventure",
      slug: "adventure",
    },
    {
      name: "Sports",
      slug: "sports",
    },
    {
      name: "Action",
      slug: "action",
    },
    {
      name: "Sandbox",
      slug: "sandbox",
    },
    {
      name: "Stealth game",
      slug: "stealth-game",
    },
    {
      name: "Educational",
      slug: "educational",
    },
    {
      name: "Strategy",
      slug: "strategy",
    },
    {
      name: "Battle royale game",
      slug: "battle-royale-game",
    },
    {
      name: "MMORPG",
      slug: "mmorpg",
    },
    {
      name: "Tactical role-playing game",
      slug: "tactical-role-playing-game",
    },
    {
      name: "Massively Multiplayer Online Game (MMO)",
      slug: "mmo",
    },
    {
      name: "Survival",
      slug: "survival",
    },
    {
      name: "Racing",
      slug: "racing",
    },
    {
      name: "Puzzle",
      slug: "puzzle",
    },
    {
      name: "Simulation games",
      slug: "simulation-games",
    },
    {
      name: "Shooter",
      slug: "shooter",
    },
    {
      name: "Horror game",
      slug: "horror-game",
    },
    {
      name: "Multiplayer online battle arena (MOBA)",
      slug: "moba",
    },
  ];

  function isFilterActive(slug: string): string {
    return params && params.includes(slug) ? "bg-amber-500" : " bg-stone-50";
  }

  function generateLink(slug: string): string {
    let url = "";
    const filters = params ? params.filter((s) => s != slug) : [];
    const activeFilters = filters ? filters.join("/") + "/" : "";
    url = `/games/${activeFilters}`;
    url += params && params.includes(slug) ? "" : slug;
    return url;
  }

  return (
    <div className="flex justify-start">
      <ul className="flex flex-wrap py-4">
        {filters.map((filter) => (
          <li
            key={filter.slug}
            className={`px-1 mx-1 mb-1 rounded filter-link border border-inherit text-gray-500 ${isFilterActive(
              filter.slug
            )}`}
          >
            <Link className="text-xs" href={`${generateLink(filter.slug)}`}>
              {filter.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersByYear;
