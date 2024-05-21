import { client } from '../client';

export default async function FetchAllUsers() {
    try {
        const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
      "favoriteMovies": favoriteMovies[]->imdbid,
        favoriteGenre[],
      "wishlist": wishlist[]->imdbid
    }`);
        return data
    } catch (error) {
        return null
    }
}

