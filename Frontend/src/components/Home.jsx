import { Link } from "react-router-dom";
import UserCompare from "./UserCompare";

export default function Home({ mainUser, allUsers }) {
    console.log("HomeAllusers", allUsers)
  return (
      <>
          {/* Henter brukernavnet*/}
          <h1>Hei {sessionStorage.getItem("user")}!</h1>
          <article>
              <section>
                  <h2>Filmer jeg skal se</h2>
                  <p>Disse filmene ligger i ønskelisten min:</p>
                  {/* <ul> */}
                      {/* Lister opp favorittfilmene til mainUser */}
                      {/* {mainUser.favoriteMovies.map((movie, index) => (
                          <li key={index}>{movie}</li>
                      ))}
                  </ul> */}
              </section>
              <section>
                  <h2>Jeg skal se sammen med...</h2>
                  <ul>
                    {allUsers?.filter((user) => user._id !== mainUser._id)
                    .map((ww, index) => (
                        <li key={index}><h3>{ww.user}</h3></li>
                    ))}
                  </ul>
                  {/* .splice(ww._id === mainUser._id) */}
              </section>
          </article>
      </>
  );
}
