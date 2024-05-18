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

// Henter favorittfilmer og favorittsjangere for en spesifikk bruker
export async function fetchUserFavoritesAndGenres(userName) {
    const data = await client.fetch(`
        *[_type == "users" && user == $userName]{
            "favoriteMovies": favoriteMovies[]->{
                _id,
                movietitle,
                "movieurl": movieurl.current
            },
            "favoriteGenres": favoriteGenre[]->{
                _id,
                genre,
                "genreurl": genreurl.current
            }
        }[0]
    `, { userName });
    console.log(data);
    return data;
}
