import { client } from '../client';

export async function FetchAllUsers() {
  try {
    const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
      "favoriteMovies": favoriteMovies[]->movietitle,
      "favoriteGenres": favoriteGenres[]->genre
    }`);
    return data; // Returner dataene
  } catch (error) {
    return null; 
  }
}
