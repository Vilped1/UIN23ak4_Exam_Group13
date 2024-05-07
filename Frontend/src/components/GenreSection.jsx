import { useState, useEffect } from "react";
import { fetchAllGenres } from "../../sanity/services/genreServices";

export default function GenreSection({ setGenreQuery }) {
  const [genre, setGenre] = useState([]);
  const [active, setActive] = useState();

  const getGenres = async () => {
    try {
      const response = await fetchAllGenres();
      setGenre(response);
    } catch (error) {
      console.error("Error fetching genres", error);
    }
  };

  function handleClick(imagetitle) {
    setGenreQuery(imagetitle);
    setActive(imagetitle);
  }

  useEffect(() => {
    getGenres();
  }, []);

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
              backgroundImage: `url(${genre.image}?h=300)`,
            }}
            onClick={() => handleClick(genre.imagetitle)}
          >
            <h3>{genre.imagetitle}</h3>
          </article>
        ))}
      </section>
    </>
  );
}
