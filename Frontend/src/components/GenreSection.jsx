import { useState, useEffect } from "react";
import { fetchAllGenres } from "../../sanity/services/genreServices";

export default function GenreSection() {
  const [genre, setGenre] = useState([]);

  const getGenres = async () => {
    try {
      const response = await fetchAllGenres();
      setGenre(response);
    } catch (error) {
      console.error("Error fetching genres", error);
    }
  };

  useEffect(() => {
    getGenres();
    console.log(genre);
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
            className="genreCard"
            key={index}
            style={{
              backgroundImage: `url(${genre.image}?h=300)`,
            }}
          >
            <h3>{genre.imagetitle}</h3>
          </article>
        ))}
      </section>
    </>
  );
}
