import { client } from '../client'

export async function fetchGenres() {
    const data = await client.fetch(`*[_type == "genres"]{
        _id,
        genre,
        "genreurl": genreurl.current
    }`)
    return data
}