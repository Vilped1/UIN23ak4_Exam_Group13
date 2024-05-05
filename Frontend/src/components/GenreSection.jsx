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

  /*   const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres/";
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
  }, []); */

  return (
    <>
      {/*      <section className="genreSection">
        {genre.map((genreName, index) => {
          const genreInfo = resources.find(
            (genreItem) => genreItem.name === genreName
          );
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
      </section>*/}

      <section>
        {genre?.map((genre, i) => {
          <article
            className="genreCard"
            key={i}
            style={{
              /*https://www.sanity.io/docs/image-urls*/
              backgroundImage: `url(https://cdn.sanity.io/asset/s2614gkl/production/${genre.image.asset._ref}h=75)`,
            }}
          >
            <h3>{genre.imagetitle}</h3>
          </article>;
        })}
      </section>
    </>
  );
}
