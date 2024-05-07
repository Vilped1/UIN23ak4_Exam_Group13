import { client } from '../client';

export async function FetchUser() {
  try {
    const data = await client.fetch(`*[_type == "users"] {
      _id,
      user,
    }`);
    console.log(data); 
    return data; // Returner dataene
  } catch (error) {
    return null; 
  }
}
