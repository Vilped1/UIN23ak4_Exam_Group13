import { client } from '../client'

export async function fetchMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        movietitle,
        "movieurl": movieurl.current,
    }`)
    // console.log("movie services", data)
    return data
}