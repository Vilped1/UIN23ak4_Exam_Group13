import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function UserCompare({ mainUser, compareUser, apiMovies }) {
  const [matchedMovies, setMatchedMovies] = useState([])
  const [matchedWish, setMatchedWish] = useState([])
  const [matchedGenres, setMatchedGenres] = useState([])
  const [matchedWishFavorites, setMatchedWishFavorites] = useState([])

  const compareMoviesAndGenres = async () => {
    const mainUserFavMovies = mainUser.favoriteMovies
    const mainUserWishMovies = mainUser.wishlist
    const mainUserFavGenres = mainUser.favoriteGenre

    const compareUserFavMovies = compareUser.favoriteMovies
    const compareUserWishMovies = compareUser.wishlist
    const compareUserFavGenres = compareUser.favoriteGenre

    const matchedFavorites = {
      movies: mainUserFavMovies.filter((movie) => compareUserFavMovies.includes(movie)),
      wish: mainUserWishMovies.filter((movie) => compareUserWishMovies.includes(movie)),
      genres: mainUserFavGenres.filter((genre) => compareUserFavGenres.includes(genre)),
      collectiveWish: mainUser.wishlist.concat(compareUser.wishlist.filter((movie) => !mainUser.wishlist.includes(movie))),
      collectiveFav: mainUser.favoriteMovies.concat(compareUser.favoriteMovies.filter((movie) => !mainUser.favoriteMovies.includes(movie))),
    }
    const wishFav = matchedFavorites.collectiveWish.filter((movie) => matchedFavorites.collectiveFav.includes(movie))

    console.log("MATCHED", matchedFavorites.movies)
    console.log("CollectiveWish ", matchedFavorites.collectiveWish)
    console.log("CollectiveFav ", matchedFavorites.collectiveFav)
    console.log("WishFav ", wishFav)

    setMatchedMovies(matchedFavorites.movies)
    setMatchedWish(matchedFavorites.wish)
    setMatchedGenres(matchedFavorites.genres)
    setMatchedWishFavorites(wishFav)
  }

  useEffect(() => {
    compareMoviesAndGenres()
  }, [])

  return (
    <>
      {/* <main> */}
      <h2>
        Forslag for {mainUser.user} og {compareUser.user}
      </h2>
      <div id="comparePage">
        <section id="catchUp">
          <h3>Catch up!</h3>
          <p>
            Dere har {matchedMovies.length} {matchedMovies.length === 1 ? "film" : "filmer"} felles på ønskelisten
          </p>
          {matchedWish.length > 0 ? (
            apiMovies
              ?.filter((movie) => matchedWish?.some((wishMovie) => wishMovie === movie.id))
              .map((movie, index) => (
                <article key={index} id="movieCard">
                  <MovieCard movie={movie} />
                </article>
              ))
          ) : (
            <p>Dere har ingen felles filmer på ønskelisten</p>
          )}
        </section>
        <section id="goSafe">
          <h3>Go safe!</h3>
          <p>
            Dere har {matchedMovies.length} {matchedMovies.length === 1 ? "film" : "filmer"} felles som favoritt
          </p>
          {matchedMovies.length > 0 ? (
            apiMovies
              ?.filter((movie) => matchedMovies?.some((favMovie) => favMovie === movie.id))
              .map((movie, index) => (
                <article key={index} id="movieCard">
                  <MovieCard movie={movie} />
                </article>
              ))
          ) : (
            <p>Dere har ingen felles favorittfilmer</p>
          )}
        </section>
        <section id="genreCompare">
          <h3>Utforsk!</h3>
          <p>Felles favoritt sjangere</p>
          {/* Skrive ut liste over favorittsjanger til begge brukere (SOM MATCHER BEGGE BRUKERE SOM BEGGE TO HAR OG LIKER) */}
          <ul>
            {matchedGenres.length > 0 ? (
              matchedGenres?.map((genre, index) => (
                <li key={index}>
                  <Link to={"/Sjanger/" + genre.toLowerCase()}>{genre.replaceAll("-", " ")}</Link>
                </li>
              ))
            ) : (
              <p>Dere har ingen felles favorittsjangere</p>
            )}
          </ul>
        </section>
      </div>
      <section id="bothCompareTitle">
        <h2>Ønskelister og favoritter</h2>
        <p>Dere har noen felles filminteresser!</p>
      </section>
      <section id="bothCompare">
        {matchedWishFavorites.length > 0 ? (
          apiMovies
            ?.filter((movie) => matchedWishFavorites?.some((favMovie) => favMovie === movie.id))
            .map((movie, index) => (
              <article key={index} id="movieCard">
                <MovieCard movie={movie} />
              </article>
            ))
        ) : (
          <p>Dere har ingen felles filmer på ønskelisten</p>
        )}
      </section>
    </>
  )
}

// const matchedFav = await mainUser?.favoriteMovies.filter((movie) => compareUser?.favoriteMovies.includes(movie))
// const matchedWish = await mainUser?.wishlist.filter((movie) => compareUser?.wishlist.includes(movie))
// const matchedGenres = await mainUser?.favoriteGenres.filter((genre) => compareUser?.favoriteGenres.includes(genre))
// setMatchedGenres(matchedGenres)
// setMatchedWish(matchedWish)
// setMatchedMovies(matchedFav)
