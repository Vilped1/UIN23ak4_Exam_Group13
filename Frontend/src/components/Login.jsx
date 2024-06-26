import { Link } from "react-router-dom"

export default function Login({ allUsers, mainUser, setMainUser, setLogedIn }) {
  //handleClick for å velge bruker fra innliggingssiden
  const handleClick = (user) => {
    setMainUser(user)
    console.log("MAINUSER", mainUser)
    setLogedIn(true)
  }

  return (
    <>
      {/*Henter alle brukere*/}
      <div id="logginn">
        <h1>Hvem skal se i dag?</h1>
        <p>Velg bruker</p>
        {allUsers?.map((user) => (
          <button key={user._id}>
            <Link to="/" onClick={() => handleClick(user)}>
              {user.user}
            </Link>
            {/* bruker Link for å sende til home "/" */}
          </button>
        ))}
      </div>
    </>
  )
}
