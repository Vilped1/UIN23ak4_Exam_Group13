import { client } from '../client';

export default async function fetchMovies() {
        const data = await client.fetch(`*[_type == "movies"]{
        imdbid,
        movietitle,
        "genre": genre->genre,
    }`)
    return data
}