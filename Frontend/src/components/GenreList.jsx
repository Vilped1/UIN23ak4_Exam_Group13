//Importerer react hooks, reactIcons
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
//Link som bruker i routing for navigasjon
import { Link } from "react-router-dom";
import {
  fetchAllGenres,
  updateFavGenre,
} from "../../sanity/services/genreServices";
import FetchAllUsers from "../../sanity/services/userService";

//Tar imot props fra App.jsx
export default function GenreList({ allGenres, setGenre }) {
  //State til handleClick
  const [active, setActive] = useState([])

  // Chat-GPT
  //Ladg en funksjon som kan bruker på onClick for å gi data fra genre
  const handleGenre = (genre) => {
    setGenre(genre)
  }

  // Chat-GPT
  //Ladg en funksjon som kan bruker på onClick for å gi data fra genre
  const handleClick = (clickedGenre) => {
    // bruker state til å include og filtre sjangeren som blir trykket
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

  //HTML-struktur med tagger, classer og id for scss
  return (
    <>
      <h2>Sjangere</h2>
      <ul id="genreSection">
        {/* Maper allGenres array for å skrive ut alle sjangere fra genreServicec.js(sanity fetch)*/}
        {allGenres?.map((genre, index) => (
          <li key={index} id={genre}>
            {/* Bruker Link navigere ved bruk av handleclick slik at man blir sendt videre til den sjanger man trykker. endrer URL og rendret side */}
            <Link onClick={() => handleGenre(genre)} to={"/Sjanger/" + genre.genreurl.current}>
              {genre.genre.replace(("-"), (" "))}
            </Link>
            {/* Viser stjerneikonet på sjangerlista. den er for å sette favoritt */}
            <span className={`star ${active.includes(genre) ? "active" : ""}`} onClick={() => handleClick(genre)}>
              {active.includes(genre) ? <FaStar /> : <FaRegStar />}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
