import { client } from "../client";

export async function fetchAllGenres() {
  const genreData = await client.fetch(`*[_type == "genre"]{
    genre,
    }`)
  return genreData;
}
