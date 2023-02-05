import type { RequestHandler } from '@builder.io/qwik-city';

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

export const onGet: RequestHandler<SwapiPeople> = async ({ params }) => {
  const { userId = '' } = params;

  const starwars = await fetch(`https://swapi.dev/api/people/${userId}`)
    .then((res) => res.json());
  // put your DB access here (hard coding data for simplicity)
  return starwars
};
