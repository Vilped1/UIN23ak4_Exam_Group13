import { client } from "../client";

/* https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */
export async function fetchAllGenres() {
  const genreData = await client.fetch(`*[_type == "genres"] | order(imagetitle asc){
    _id,
    genre,
    "genreurl": genreurl[]->current,
    }`)
  return genreData;
}
