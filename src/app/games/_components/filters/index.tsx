import Link from "next/link";

interface Filter {
  name: string;
  slug: string;
  category: string;
}

async function getData() {
  "use server";
  const res = await fetch(`http://localhost/api/filters`)
  const filters: Filter[] = await res.json();
  return { filters };
}

const FiltersByYear = async ({ params }: { params: string[] }) => {
  const { filters } = await getData();

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
