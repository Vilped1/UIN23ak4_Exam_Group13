import { client, writeClient } from "../client";

/* https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */
export async function fetchAllGenres() {
  const genreData = await client.fetch(`*[_type == "genres"] | order(genre asc){
    _id,
    genre,
    "genreimage": genreimage -> image,
    genreurl,
    }`)
  return genreData;
}

export async function fetchUsers() {
  const userData = await client.fetch(`*[_type == "users"]{
    _id,
    user,
    favoriteGenre,
    favoriteMovies,
    }`)
  return userData;
}

export async function updateFavGenre(id, genreID){
  console.log("updateFavGenre ID:", id);
  console.log("updateFavGenre GENRENAME:", genreID);

  const genreReference = {
    _ref: genreID,
    _type: 'genres',
  }

  console.log("genreFormated:", genreReference);

  try {
    const result = await writeClient.patch(id)
    .setIfMissing({favoriteGenre: []})
    .append("favoriteGenre", [genreReference])
    .commit()

    console.log("Patch successful! Result:", result);

    return "Added successfully " + id;
  } catch (err) {
    console.error("Patch failed! Error:", err);
    return "Failed " + err.message;
  }
}

export async function removeAllFavGenres(id){
  console.log("removeAllFavGenres ID:", id);

  try {
    const result = await writeClient
      .patch(id)
      .unset(["favoriteGenre"])
      .commit();

    console.log("Patch successful! Result:", result);

    return "Removed successfully " + id;
  } catch (err) {
    console.error("Patch failed! Error:", err);
    return "Failed " + err.message;
  }
}