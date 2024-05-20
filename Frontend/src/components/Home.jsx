import { Link } from "react-router-dom"
import UserCompare from "./UserCompare"
import MovieCard from "./MovieCard"

export default function Home({ mainUser, setCompareUser, compareUser, allUsers, logedIn, apiMovies }) {
  const handleClick = (user) => {
    setCompareUser(user)
  }
  console.log(mainUser)
  return (
    <>
      {/* Henter brukernavnet*/}
      <h1>Hei {localStorage.getItem("user")}!</h1>
      <article>
        <section>
          <h2>Filmer jeg skal se</h2>
          <p>Disse filmene ligger i ønskelisten min:</p>
          <ul>
            {/* Lister opp favorittfilmene til mainUser */}
            {logedIn ? apiMovies?.filter((movie) => mainUser.favoriteMovies.some((favMovie) => favMovie === movie.id)).map((movie) => <MovieCard movie={movie} />) : null}
          </ul>
        </section>
        <section>
          <h2>Jeg skal se sammen med...</h2>
          <ul>
            {/* {allUsers.map((users) => (
              <li>{users.user}</li>
            ))} */}
            {allUsers
              ?.filter((users) => users._id !== mainUser._id)
              .map((remusers) => (
                <button key={remusers._id} onClick={() => handleClick(remusers)}>
                  {remusers.user}
                </button>
              ))}
          </ul>
          {/* .splice(ww._id === mainUser._id) */}
        </section>
      </article>
    </>
  )
}
