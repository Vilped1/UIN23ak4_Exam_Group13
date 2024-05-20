import { useState, useEffect } from "react";
import {
  fetchAllGenres,
  fetchUsers,
  updateFavGenre,
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
      const userResponse = await fetchUsers();
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
        const userResponse = await fetchUsers();
        const userID = userResponse[4]._id;
        await updateFavGenre(
          //sender userID sammen med valgt sjanger til updateFavGenre (sanity\services\genreServices.js)
          userID,
          selectedGenre._id
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
