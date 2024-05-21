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
  /* 
    https://webtricks.blog/oppdatere-et-array-felt-i-en-innholdstype-i-sanity-fra-et-react-grensesnitt/
    https://www.sanity.io/docs/js-client#fetch-multiple-documents-in-one-go
     */

export async function updateFavGenre(userInfo, genreID) {
  console.log("updateFavGenre USER INFO:", userInfo);
  console.log("updateFavGenre GENREID:", genreID);

  const genreReference = {
    _ref: genreID,
    _type: 'genres',
  };

  console.log("Genre Formated:", genreReference);

  const isAlreadyFavorite = userInfo.favoriteGenre.some(genre => genre._ref === genreID);

  if (!isAlreadyFavorite) {
    try {
      const result = await writeClient.patch(userInfo._id)
        .setIfMissing({ favoriteGenre: [] })
        .append("favoriteGenre", [genreReference])
        .commit();

      console.log("Patch successful! Result:", result);
      console.log("User ID", userInfo._id);

      return "Added successfully " + userInfo._id;
    } catch (err) {
      console.error("Patch failed! Error:", err);
      return "Failed " + err.message;
    }
  } else {
    try {
      const result = await writeClient.patch(userInfo._id)
        .unset([`favoriteGenre[_ref=="${genreID}"]`])
        .commit();

      console.log("Genre removed! Result:", result);
      return "Removed successfully " + userInfo._id;
    } catch (err) {
      console.error("Patch failed! Error:", err);
      return "Failed to remove: " + err.message;
    }
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