import { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { fetchAllGenres, updateFavGenre } from "../../sanity/services/genreServices"
import FetchAllUsers from "../../sanity/services/userService"

export default function GenreList({ allGenres, setGenre, mainUser }) {
  const [active, setActive] = useState([])

  const handleClick = async (genre) => {
    try {
      const result = await updateFavGenre(mainUser, genre)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2>Sjangere</h2>
      <ul id="genreList">
        {/* Maper allGenres array for å skrive ut alle sjangere fra genreServicec.js(sanity fetch)*/}
        {allGenres?.map((genre, index) => (
          <li key={index} id={genre.genre}>
            {/* Bruker Link navigere ved bruk av handleclick slik at man blir sendt videre til den sjanger man trykker. endrer URL og rendret side */}
            <Link onClick={() => handleGenre(genre)} to={"/Sjanger/" + genre.genreurl.current}>
              {genre.genre.replace("-", " ")}
            </Link>
            {/* Viser stjerneikonet på sjangerlista. den er for å sette favoritt */}
            <span className={`star ${active.includes(genre) ? "active" : ""}`} onClick={() => handleClick(genre)}>
              {active.includes(genre) ? <FaStar /> : <FaRegStar />}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
