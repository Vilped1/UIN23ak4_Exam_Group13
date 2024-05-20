import { client, writeClient } from "../client";

/* https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */
export async function fetchAllGenres() {
<<<<<<< Updated upstream
  const genreData = await client.fetch(`*[_type == "genres"] | order(imagetitle asc){
    _id,
    genre,
    "genreurl": genreurl[]->current,
=======
  const genreData = await client.fetch(`*[_type == "genres"] | order(genre asc){
    _id,
    genre,
    "genreimage": genreimage -> image,
    genreurl,
>>>>>>> Stashed changes
    }`)
  return genreData;
}

export async function fetchUserID() {
  const userData = await client.fetch(`*[_type == "users"]{
    _id,
    user,
    favoriteGenre,
    favoriteMovies,
    }`)
  return userData;
}

export async function updateFavGenre(id, genreimage, genre){
  console.log("updateFavGenre ID:", id);
  console.log("updateFavGenre GENRENAME:", genre);

 const genreFormated = {
    genreimage: genreimage,
    genre: genre,
  }

  console.log("genreFormated:", genreFormated);

  try {
    const result = await writeClient.patch(id)
    .setIfMissing({favoriteGenre: []})
    .append("favoriteGenre", [genreFormated])
    .commit({autoGenerateArrayKeys: true})

    console.log("Patch successful! Result:", result);

    return "Added successfully " + id + " " + genre;
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
