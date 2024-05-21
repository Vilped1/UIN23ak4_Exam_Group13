import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"

export default function Genre({ apiMovies, mainUser, allGenres, movies, setMovies, genre }) {
  const [movieByGenre, setMovieByGenre] = useState([])
  const filterMoviesByGenre = async (genre) => {
    const filterByGenre = await movies?.filter((movie) => movie?.genre === genre?.genre)
    console.log("Movies", movies)
    console.log("Genre", genre)
    console.log("FilterByGenre", filterByGenre)
    setMovieByGenre(filterByGenre)
  }

  useEffect(() => {
    filterMoviesByGenre(genre)
  }, [genre])

  return (
    <>
      <h2>Sjangeren</h2>
      <section id="genrePage">
        {apiMovies
          ?.filter((movie) => movieByGenre?.some((genreMovie) => genreMovie.imdbid === movie.id))
          .map((movie) => (
            <article key={movie._id} id="movieCard">
              <MovieCard movie={movie} />
            </article>
          ))}
      </section>
    </>
  )
}
