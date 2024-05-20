import MovieCard from "./MovieCard"

export default function UserFavorites({ apiMovies, mainUser }) {
  return (
    <>
      <section id="userFavorites">
        {apiMovies
          ?.filter((movie) => mainUser.favoriteMovies.some((favMovie) => favMovie === movie.id))
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </section>
    </>
  )
}
