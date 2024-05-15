import { client, writeClient } from "../client";

/* https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */
export async function fetchAllGenres() {
  const genreData = await client.fetch(`*[_type == "asset"] | order(imagetitle asc){
    _id,
    "image": image.asset->url,
    imagetitle,
    }`)
  return genreData;
}

export async function fetchUserID() {
  const userData = await client.fetch(`*[_type == "User"]{
    _id
    }`)
  return userData;
}

export async function updateFavGenre(id, fg){
  const result = await writeClient.patch(id)
  .setIfMissing({favGenre: []})
  .append("favGenre", [{genreName: fg}])
  .commit({autoGenerateArrayKeys: true})
  .then(() => {return "Added successfully" + t})
  .catch((err) => {return "Failed" + err.message})
  return result
}
