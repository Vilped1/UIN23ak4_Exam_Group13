import { useEffect, useState } from "react"
import { fetchGenres } from "../../sanity/services/genreServices"
import { Link } from "react-router-dom"

export default function Genres() {
  const [content, setContent] = useState([])
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  const fetchGenresData = async () => {
    const data = await fetchGenres()
    console.log(data)
    data.sort()
    setContent(data)
  }

  useEffect(() => {
    fetchGenresData()
  }, [])

  return (
    <>
      <h1>Genres</h1>
      <ul>
        {content.map((genre) => (
          <li key={genre._id}>
            <Link to={`/genre/${genre.genreurl}`}>{genre.genre}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
