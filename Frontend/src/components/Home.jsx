export default function Home({ mainUser }) {
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
                      {mainUser.favoriteMovies.map((movie, index) => (
                          <li key={index}>{movie}</li>
                      ))}
                  </ul>
              </section>
              <section>
                  <h2>Jeg skal se sammen med...</h2>
              </section>
          </article>
      </>
  );
}
