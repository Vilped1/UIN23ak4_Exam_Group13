import { useState, useEffect } from "react"
import "./App.css"
import { fetchGenres } from "../sanity/services/genreServices"
import { FetchUser } from "../sanity/services/userServices"

export default function App() {
  const [content, setContent] = useState(null)
  const [genres, setGenres] = useState(null)
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  const getGenres = async () => {
    try {
      const data = await fetchGenres()
      setGenres(data)
    } catch {
      console.log("neeiii")
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <>
      {genres?.map((item, index) => (
        <div key={index}>
          <h2>{item.genre}</h2>
        </div>
      ))}
    </>
  )
}
