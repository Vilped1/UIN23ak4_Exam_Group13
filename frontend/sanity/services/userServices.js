import { client } from '../client';

//Henter alle brukere fra Sanity
export async function FetchUser() {
  try {
    const data = await client.fetch(`*[_type == "users"] {
      _id, // Bruker-ID
      user, // Brukernavn
      "favoriteGenre": favoriteGenre[]->genre, // Favorittsjangre
    }`);
    return data; 
  } catch (error) {
    return null;
  }
}

//Henter favorittfilmer for en spesifikk bruker fra Sanity
export async function FetchUserFavorites(user) {
  try {
    const data = await client.fetch(`*[_type == "users" && user == $user] {
      "favoriteGenre": favoriteGenre[]->genre, // Favorittsjangre
      "favoriteMovies": favoriteMovies[]->{movietitle, movieurl} // Favorittfilmer med tittel og URL
    }`, { user }); 
    return data; 
  } catch (error) {
    return null; 
  }
}
