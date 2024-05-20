<<<<<<< Updated upstream
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

=======
import { useState, useEffect } from "react";
import {
  fetchAllGenres,
  fetchUserID,
  updateFavGenre,
  removeAllFavGenres,
} from "../../sanity/services/genreServices";

export default function GenreList() {
  const [genre, setGenre] = useState([]);
  const [active, setActive] = useState();
  const [userID, setUserID] = useState();
  const [selectedGenre, setSelectedGenre] = useState();

  const getGenres = async () => {
    try {
      const response = await fetchAllGenres();
      setGenre(response);
      console.log("GENRES", response);
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
    setActive(genre.genre);
    setSelectedGenre(genre);

    console.log("Genre selected: ", genre.genre);
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
        const userID = userResponse[5]._id;
        await removeAllFavGenres(
          //sender userID sammen med valgt sjanger til updateFavGenre (sanity\services\genreServices.js)
          userID
        );
        console.log("Update selected genre", selectedGenre);
      } catch (error) {
        console.error("Error adding favourite genre", error);
      }
    }
  };
  return (
    <>
      <button className="favButton" onClick={handleAddFav}>
        Add {selectedGenre?.genre} to favorites
      </button>
      <section className="genreSection">
        {genre.map((genre, index) => (
          <article
            className={`genreCard ${active === genre.genre ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${genre.genreimage})`,
            }}
            onClick={() => handleClick(genre)}
          >
            <h3>{genre.genre}</h3>
          </article>
        ))}
      </section>
      {/*       <h2>Sjangere</h2>
      <ul>
        {genre?.map((genre, index) => (
          <section>
            <li key={index}>{genre.genreTitle}</li>
            <button onClick={() => handleClick(genre)}>
              Legg til i favoritter
            </button>
          </section>
        ))}
      </ul> */}
      {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
      {/* <UserCompare/> */}
    </>
  );
}
>>>>>>> Stashed changes
