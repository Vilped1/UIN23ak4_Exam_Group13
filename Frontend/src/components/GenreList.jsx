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
        {allGenres?.map((genre, index) => (
          <li key={index} id={genre}>
            <Link onClick={() => setGenre(genre)} to={"/Sjanger/" + genre.genreurl.current}>
              <h2>{genre.genre.replace("-", " ")}</h2>
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
