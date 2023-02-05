import type { RequestHandler } from '@builder.io/qwik-city';

type SwapiResponse = {
  count: number;
  next: string;
  previous: string;
  result: never;
};

type SwapiPeople = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type SwapiPeopleResponse = SwapiResponse & {
  results: SwapiPeople[];
};

export const onGet: RequestHandler<SwapiPeopleResponse> = async ({ url }) => {
  const page = url.searchParams.get('page') || '1';
  const name = url.searchParams.get('name') || '';

  const starwars = await fetch(`https://swapi.dev/api/people/?page=${page}&search=${name}`, {
  })
    .then((res) => res.json());
  // put your DB access here (hard coding data for simplicity)
  return starwars
};
