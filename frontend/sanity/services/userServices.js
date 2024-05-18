import { client } from '../client';

//Henter alle brukere fra Sanity
export async function FetchUser() {
  try {
    const data = await client.fetch(`*[_type == "users"] {
      _id, // Bruker-ID
      user, // Brukernavn
    }`);
    return data; 
  } catch (error) {
    return null;
  }
}


