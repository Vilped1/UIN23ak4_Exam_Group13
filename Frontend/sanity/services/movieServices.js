import { client } from '../client'

export async function fetchMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        title,
        "movieurl": movieurl.current
    }`)
}