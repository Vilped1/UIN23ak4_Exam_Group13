import { useState, useEffect } from "react";
import { resources } from "../assets/resources";

export default function GenreSection({ content, setContent }) {
  const [genre, setGenre] = useState([]);

  const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getGenres = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.results);
      setGenre(data.results.slice(1));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <section className="genreSection">
        {genre.map((genreName, index) => {
          const genreInfo = resources.find(
            (genreItem) => genreItem.name === genreName
          );
          {
            /*
            Ræva løsning, rettes opp med Sanity.
            Forsøker å mappe bilder til genrecards fra resources.js,
            lettere løst med Sanity
          */
          }
          return (
            <article
              className="genreCard"
              key={index}
              style={{
                backgroundImage: `url(${genreInfo ? genreInfo.imageUrl : ""})`,
              }}
            >
              <h3>{genreName}</h3>
            </article>
          );
        })}
      </section>
    </>
  );
}
