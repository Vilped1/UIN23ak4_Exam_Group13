import MovieCard from "./MovieCard"

export default function UserFavorites({ apiMovies, mainUser, logedIn }) {
  return (
    <>
      <section id="userFavorites">{logedIn ? apiMovies?.filter((movie) => mainUser.favoriteMovies.some((favMovie) => favMovie === movie.id)).map((movie) => <MovieCard movie={movie} />) : null}</section>
    </>
  )
}
