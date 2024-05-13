import { client } from '../client';

export async function FetchUser() {
  try {
    const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
      "favoriteGenre": favoriteGenre[]->genre,
    }`);
    // console.log(data);
    return data; // Returner dataene
  } catch (error) {
    return null; 
  }
}

export async function FetchUserFavorites(user) {
  try {
    const data = await client.fetch(`*[_type == "users" && user == $user] {
      "favoriteGenre": favoriteGenre[]->genre,
      "favoriteMovies": favoriteMovies[]->movietitle
    }`,{user});
    return data;
  } catch (error) {
    return null; 
  }
}
