import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import heartIcon from "../assets/heartIcon.svg";
import { useState } from "react";

export default function MovieCard({ content, searchQuery }) {
  const [favMovie, setFavMovie] = useState([]);

  const addFavMovie = (e) => {
    e.preventDefault();
    setFavMovie();
  };

  return (
    <>
      <section className="cardSection">
        {content?.length === 0 ? (
          <p>{`No results match your query: "${searchQuery}"`}</p>
        ) : (
          Array.isArray(content) &&
          content.map((item) => (
            <article key={item.id} className="movieCard">
              <section className="imgContainer">
                <img
                  src={heartIcon}
                  className="favIcon"
                  alt="Fav Movie Button"
                />
                {item.primaryImage && (
                  <img
                    src={item.primaryImage.url}
                    alt={item.originalTitleText.text}
                  />
                )}
              </section>
              <section className="infoContainer">
                <h3>
                  {item.originalTitleText.text}
                  {/*API skriver ut begrenset antall filmer, alle sortert endYear->starYear.
                     Så alle filmer vil ha endYear verdi som ikke er veldig nyttig*/}
                  {/*<p>{`(${item.releaseYear.year})`}</p> */}
                </h3>
                <a
                  href={`https://www.imdb.com/title/${item.id}/?ref_=sr_t_1`}
                  target="_blank"
                >
                  <button className="imdbButton">IMDb</button>
                </a>
              </section>
            </article>
          ))
        )}
      </section>
    </>
  );
}
