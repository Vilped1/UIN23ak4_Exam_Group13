import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"

export default function UserCompare({ mainUser, compareUser, apiMovies }) {
  const [matchedMovies, setMatchedMovies] = useState([])
  const [matchedWish, setMatchedWish] = useState([])

  const compareMovies = async () => {
    const matchedFav = await mainUser?.favoriteMovies.filter((movie) => compareUser?.favoriteMovies.includes(movie))
    const matchedWish = await mainUser?.wishlist.filter((movie) => compareUser?.wishlist.includes(movie))
    setMatchedWish(matchedWish)
    setMatchedMovies(matchedFav)
  }

  useEffect(() => {
    compareMovies()
  }, [])

  return (
    <>
      <main>
        <h2>
          Forslag for {mainUser.user} og {compareUser.user}
        </h2>
        <section>
          <h3>Catch up!</h3>
          <p>Oversikt over filmer, som begge brukere har på watchlist</p>
        </section>
        <section>
          <h3>Go safe!</h3>
          <p>Oversikt over felles favorittfilmer</p>
          {apiMovies
            ?.filter((movie) => matchedMovies?.some((favMovie) => favMovie === movie.id))
            .map((movie) => (
              <article key={movie._id}>
                <MovieCard movie={movie} />
              </article>
            ))}
        </section>
        <section>
          <h3>Utforsk!</h3>
          {/* Skrive ut liste over favorittsjanger til begge brukere (SOM MATCHER BEGGE BRUKERE SOM BEGGE TO HAR OG LIKER) */}
          {apiMovies
            ?.filter((movie) => matchedWishFav?.some((favMovie) => favMovie === movie.id))
            .map((movie) => (
              <MovieCard movie={movie} />
            ))}
        </section>
        <section>
          <h2>Ønskelister og favoritter</h2>
          <p>Dere har noen felles filminteresser!?</p>
        </section>
      </main>
    </>
  )
}
