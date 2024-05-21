import MovieCard from "./MovieCard";

export default function Genre({ apiMovies, mainUser, allGenres, movies, setMovies }) {

  console.log("api movies", apiMovies)
  console.log("sjangere", allGenres)
  console.log("brukers fav", mainUser)
  console.log("filmer", movies)

  const filGenres = apiMovies.filter((something) => {
    mainUser?.favoriteMovies.some((fav) => fav.imdbid === movies.id)
  })


  movies.map((movie) => movie.genre)
  const filteredGenres = allGenres?.filter((movie) => mainUser?.favoriteGenres.some((favMovie) => favMovie.genre === movies?.genre)).map((movie) => apiMovies)

  // console.log("Filtered Movies:", filteredGenres);
  console.log("Fil Movies:", filGenres);

  return (
    <>
      <section>
        <h2>Sjangeren</h2>
      </section>

    </>
  )
}
