import { client } from '../client';

export default async function FetchAllUsers() {
    try {
        const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
      "favoriteMovies": favoriteMovies[]->imdbid,
      "favoriteGenres": favoriteGenre[]->genre,
      "wishlist": wishList[]->imdbid
    }`);
        return data
    } catch (error) {
        return null
    }
}
