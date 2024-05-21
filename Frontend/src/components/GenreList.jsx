import { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function GenreList({ allGenres, setGenre }) {
  const [active, setActive] = useState([])

  // Chat-GPT
  const handleGenre = (genre) => {
    setGenre(genre)
  }

  // Chat-GPT
  const handleClick = (clickedGenre) => {
    setActive((prevActive) => {
      if (prevActive.includes(clickedGenre)) {
        if (prevActive.includes(clickedGenre)) {
          return prevActive.filter((genre) => genre !== clickedGenre)
        } else {
          return [...prevActive, clickedGenre]
        }
      }
    })
  }
  //

  return (
    <>
      <h2>Sjangere</h2>
      <ul id="genreSection">
        {allGenres?.map((genre, index) => (
          <li key={index} id={genre}>
            <Link onClick={() => handleGenre(genre)} to={"/Sjanger/" + genre.genreurl.current}>
              <h2>{genre.genre}</h2>
            </Link>
            <span className={`star ${active.includes(genre) ? "active" : ""}`} onClick={() => handleClick(genre)}>
              {active.includes(genre) ? <FaStar /> : <FaRegStar />}
            </span>
          </li>
        ))}
      </ul>
      {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
      {/* <UserCompare/> */}
    </>
  )
}
