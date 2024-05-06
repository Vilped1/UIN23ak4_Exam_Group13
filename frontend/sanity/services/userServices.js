import { client } from '../client'

export async function FetchUser () {
    const data = await client.fetch (`*[_type == "users"] {
        _id,
        

    }`)
}