import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GenreList({allGenres}) {
  const [active, setActive] = useState([])

 // Chat-GPT
 const handleClick = (clickedGenre) => {
    setActive((prevActive) => {
      if(prevActive.includes(clickedGenre)) {
        return prevActive.filter((genre) => genre !== clickedGenre)
      } else {
        return [...prevActive, clickedGenre]
      }
    })
  }
  // 

    return (
        <>
            <h2>Sjangere</h2>
            <ul id="genreSection">
                {allGenres?.map((genre, index) =>
                    <li key={index} id={genre}>
                        <Link to={"/Sjanger/" + genre.genre.toLowerCase()}><h2>{genre.genre.replaceAll("-", " ")}</h2></Link>
                        <span className={`star ${active.includes(genre) ? "active" : ""}`} onClick={() => handleClick(genre)} >
                            {active.includes(genre) ? <FaStar /> : <FaRegStar /> }
                        </span>
                    </li>
                )}
            </ul>
            {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
            {/* <UserCompare/> */}
        </>
    )
}

