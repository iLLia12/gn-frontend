export interface Game {
  slug: string;
  name: string;
  year: string;
  developer: string;
  description: string;
  image: string;
}

export interface Params {
  params: { filters: string[] };
  searchParams: {};
}
