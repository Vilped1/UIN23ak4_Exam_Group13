import { client } from '../client'

export async function fetchMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        id,
        primaryImage,
        titleText,
        releaseYear,
        "movieurl": movieurl.current
    }`)
}