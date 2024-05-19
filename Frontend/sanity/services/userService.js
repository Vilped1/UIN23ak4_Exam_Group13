import { client } from '../client';

export async function FetchAllUsers() {
    try {
        const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
      "favoriteMovies": favoriteMovies[]->movietitle,
      "favoriteGenres": favoriteGenres[]->genres
    }`);
        return data; // Returnerer objekter med brukere og deres favorittfilmer og sjangere
    } catch (error) {
        return null;
    }
}
