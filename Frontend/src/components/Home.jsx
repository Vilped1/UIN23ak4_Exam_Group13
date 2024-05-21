import { Link } from "react-router-dom"
import UserCompare from "./UserCompare"
import MovieCard from "./MovieCard"

export default function Home({ mainUser, setCompareUser, allUsers, apiMovies }) {
  const handleClick = (user) => {
    setCompareUser(user)
    console.log("COMPAREUSER", user)
  }

  return (
    <>
      {/* Henter brukernavnet*/}
      <h1>Hei {mainUser ? mainUser.user : null}!</h1>
      <div id="homePage">
        <section>
          <h2>Filmer jeg skal se</h2>
          <p>Disse filmene ligger i ønskelisten min:</p>
          <section id="homeMovie">
            {/* Lister opp favorittfilmene til mainUser */}
            {apiMovies
              ?.filter((movie) => mainUser?.favoriteMovies.some((favMovie) => favMovie === movie?.id))
              .map((movie) => (
                <article key={movie._id} id="movieCard">
                  <MovieCard movie={movie} />
                </article>
              ))}
          </section>
        </section>
        <section>
          {/*Lister opp rest brukere*/} 
          <h2>Se sammen med...</h2>
          <ul id="compare">
            {allUsers
              ?.filter((users) => users._id !== mainUser._id)
              .map((remusers) => (
                <li key={remusers._id}>
                  <Link to={`/Bruker-sammenligning`} onClick={() => handleClick(remusers)}>
                  {remusers.user}
                  </Link>
                </li>
              ))}
          </ul>
          {/* .splice(ww._id === mainUser._id) */}
        </section>
      </div>
    </>
  )
}
