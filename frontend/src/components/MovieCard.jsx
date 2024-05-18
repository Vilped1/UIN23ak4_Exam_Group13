import { useState, useEffect } from "react";
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';

export default function MovieCard() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }

  const [movieCard, setMovieCard] = useState([])
  const [query, setQuery] = useState("interstellar")
  const [urlQuery, setUrlQuery] = useState("?exact=false&titleType=movie&limit=50")
  const [favorite, setFavorite] = useState(false)
  const favoriteToggle = () => {
    setFavorite(!favorite)
  }


  const getMovieCard = async () => {
    try {
      const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}${urlQuery}`, options)
      const data = await response.json()
      setMovieCard(data.results)
      console.log("movie card fetch: ", data.results[0])
    } catch {
      console.error("error on fetch movie card")
    }
  }
  console.log(movieCard)

  useEffect(() => {
    getMovieCard()
  }, [query])

  return (
    <>
      {movieCard?.map(item =>
        <article key={item.id}>
          <h1>Tittle: {item.titleText.text}</h1>
          <ul>
            {item.releaseYear && <li>{item.releaseYear.year}</li>}
            <li onClick={favoriteToggle}>
              {favorite ? <IoMdStar style={{ fontSize: '35px', color: 'rgb(12, 87, 119)' }} /> : <IoMdStarOutline style={{ fontSize: '35px', color: 'rgb(12, 87, 119)' }} />}
            </li>
          </ul>
          {item.primaryImage && <img style={{ width: '100px' }} id="image" src={item.primaryImage.url} alt={item.titleText.text} />}
          <button><a href={`https://www.imdb.com/title/${item.id}`} target="_blank">Check out movie</a></button>
        </article>
      )}
    </>
  )
}