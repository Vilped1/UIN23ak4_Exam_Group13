import { client } from '../client';

// Henter alle sjangere
export async function fetchGenres() {
    const data = await client.fetch(`*[_type == "genres"]{
        _id,
        genre,
        "genreurl": genreurl.current
    }`);
    console.log(data);
    return data;
}

// Henter favorittfilmer og favorittsjangere for en spesifikk bruker fra Sanity
export async function FetchUserFavorites(user) {
    try {
        const data = await client.fetch(`*[_type == "users" && user == $user] {
            "favoriteGenre": favoriteGenre[]->{
                _id,
                genre
            }, // Favorittsjangre
            "favoriteMovies": favoriteMovies[]->{
                movietitle,
                "movieurl": movieurl.current
            } // Favorittfilmer med tittel og URL
        }`, { user });
        return data;
    } catch (error) {
        console.error('Error fetching user favorites:', error);
        return null;
    }
}
