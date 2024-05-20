import UserFavorites from "./UserFavorites"

export default function Home({ apiMovies, mainUser, logedIn }) {
  return (
    <>
      <h1>Hei, {localStorage.getItem("user")}!</h1>
      <article>
        <section>
          <h2>Filmer jeg skal se</h2>
          <UserFavorites apiMovies={apiMovies} mainUser={mainUser} logedIn={logedIn} />
          <p>Disse filmene ligger i ønskelisten min:</p>
        </section>

        <section>
          <h2>Jeg skal se sammen med...</h2>
        </section>
      </article>
    </>
  )
}
