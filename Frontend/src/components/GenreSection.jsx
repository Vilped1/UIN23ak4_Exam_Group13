import { useState, useEffect } from "react";
import {
  fetchAllGenres,
  fetchUserID,
  updateFavGenre,
} from "../../sanity/services/genreServices";
import { user } from "../../../Sanity/schemaTypes/users";

export default function GenreSection({ setGenreQuery }) {
  const [genre, setGenre] = useState([]);
  const [active, setActive] = useState();
  const [userID, setUserID] = useState();
  const [selectedGenre, setSelectedGenre] = useState();

  const getGenres = async () => {
    try {
      const response = await fetchAllGenres();
      setGenre(response);
    } catch (error) {
      console.error("Error fetching genres", error);
    }
  };

  //deprekrert. Brukes bare til testing av brukerdata
  const fetchUserData = async () => {
    try {
      const userResponse = await fetchUserID();
      setUserID(userResponse);
      console.log("USER RESPONSE", userResponse);
    } catch (error) {
      console.error("Error fetching user ID", error);
    }
  };

  const handleClick = (genre) => {
    setGenreQuery(genre.imagetitle.replace(/\s+/g, ""));
    setActive(genre.imagetitle);
    setSelectedGenre(genre);

    console.log("Genre selected: ", genre.imagetitle);
  };

  useEffect(() => {
    getGenres();
    fetchUserData();
  }, []);

  /* 
  https://webtricks.blog/oppdatere-et-array-felt-i-en-innholdstype-i-sanity-fra-et-react-grensesnitt/
  https://www.sanity.io/docs/js-client#fetch-multiple-documents-in-one-go
   */
  const handleAddFav = async (e) => {
    e.preventDefault();
    if (selectedGenre) {
      try {
        //Fetcher ID til bruker for patching av favorittsjanger
        const userResponse = await fetchUserID();
        const userID = userResponse[2]._id;
        await updateFavGenre(
          //sender userID sammen med valgt sjanger til updateFavGenre (sanity\services\genreServices.js)
          userID,
          selectedGenre.imagetitle,
          selectedGenre.image
        );
        console.log("Update selected genre", selectedGenre);
      } catch (error) {
        console.error("Error adding favourite genre", error);
      }
    }
  };

  return (
    <>
      {/*   TIPS TIL UTFORMING
      https://www.sanity.io/docs/image-urls
      https://www.sanity.io/docs/presenting-images
      https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */}

      {/*
        TODO-----------------------------------------------------------------------------------
            Adde trykkbart element som oppdaterer favorittsjanger
            og har visuell indikasjon på om sjanger er favorisert eller ikke.

        TODO-----------------------------------------------------------------------------------
            Funksjonalitet for å legge favorittfilmer til profil,
            kategorisert etter sjanger
      */}
      <button className="favButton" onClick={handleAddFav}>
        Add {selectedGenre?.imagetitle} to favorites
      </button>
      <section className="genreSection">
        {genre.map((genre, index) => (
          <article
            className={`genreCard ${
              active === genre.imagetitle ? "active" : ""
            }`}
            key={index}
            style={{
              backgroundImage: `url(${genre.image})`,
            }}
            onClick={() => handleClick(genre)}
          >
            <h3>{genre.imagetitle}</h3>
          </article>
        ))}
      </section>
    </>
  );
}
