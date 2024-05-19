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
    _id,
    GenreSection,
    }`)
  return userData;
}

//TODO-------------------------------------------------------------------------
// Funksjonalitet for å fjerne en favorittsjanger fra brukerens profil
export async function updateFavGenre(id, genreName, genreImage){
  console.log("updateFavGenre ID:", id);
  console.log("updateFavGenre GENREIMAGE:", genreImage);
  console.log("updateFavGenre GENRENAME:", genreName);

  const genreFormated = {
    genreName: genreName,
    genreImage: genreImage
  }

  console.log("genreFormated:", genreFormated);

  try {
    const result = await writeClient.patch(id)
    .setIfMissing({GenreSection: []})
    .append("GenreSection", [genreFormated])
    .commit({autoGenerateArrayKeys: true})

    console.log("Patch successful! Result:", result);

    return "Added successfully " + id + " " + genreName + " " + genreImage;
  } catch (err) {
    console.error("Patch failed! Error:", err);
    return "Failed " + err.message;
  }
}


