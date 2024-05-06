import { client } from '../client'

export async function fetchUsers() {
    const data = await client.fetch(`*[_type == "users"]{
        _id,
        name,
        email,
        password
    }`)
    return data
}