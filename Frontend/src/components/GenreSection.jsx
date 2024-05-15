import { useState, useEffect } from "react";
import {
  fetchAllGenres,
  fetchUserID,
  updateFavGenre,
} from "../../sanity/services/genreServices";

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

  const fetchUserData = async () => {
    try {
      const userResponse = await fetchUserID();
      setUserID(userResponse[0]._id);
      console.log(userID);
    } catch (error) {
      console.error("Error fetching user ID", error);
    }
  };

  const handleClick = (genre) => {
    setGenreQuery(genre.imagetitle);
    setActive(genre.imagetitle);
    setSelectedGenre(genre);
    console.log("Genre selected: ", genre);
  };

  useEffect(() => {
    getGenres();
    fetchUserData();
  }, []);

  /* 
  https://webtricks.blog/oppdatere-et-array-felt-i-en-innholdstype-i-sanity-fra-et-react-grensesnitt/
   */
  const handleAddFav = async (e) => {
    e.preventDefault();
    if (selectedGenre) {
      const transformedGenre = {
        genreName: selectedGenre.imagetitle,
        genreImage: selectedGenre.image,
      };
      const result = await updateFavGenre(userID, transformedGenre);
      console.log("Selected genre", selectedGenre);
    }
  };

  return (
    <>
      {/*   TIPS TIL UTFORMING
      https://www.sanity.io/docs/image-urls
      https://www.sanity.io/docs/presenting-images
      https://www.sanity.io/docs/how-queries-work#dd66cae5ed8f */}
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
      <button onClick={handleAddFav}>Add Favourite Genre</button>
    </>
  );
}
