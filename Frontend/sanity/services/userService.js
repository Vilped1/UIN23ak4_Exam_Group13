import { client } from '../client';

export default async function FetchAllUsers() {
    try {
        const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
<<<<<<< Updated upstream
      "favoriteMovies": favoriteMovies[]->imdbid,
      "favoriteGenres": favoriteGenre[]->genre,
=======
      "favoriteMovies": favoriteMovies[]->movietitle,
      "favoriteGenres": favoriteGenre[]->genre
>>>>>>> Stashed changes
    }`);
        return data
    } catch (error) {
        return null
    }
}
