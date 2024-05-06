import { client } from "../client";

/* https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */
export async function fetchAllGenres() {
  const genreData = await client.fetch(`*[_type == "asset"] | order(imagetitle asc){
    _id,
    "image": image.asset->url,
    imagetitle,
    }`)
  return genreData;
}
