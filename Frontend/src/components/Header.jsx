import { Link } from "react-router-dom"
import { BiMoviePlay } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"

export default function Header({ setMainUser, mainUser, setCompareUser, setLogedIn }) {
  const handleClick = () => {
    setMainUser(null)
    setCompareUser(null)
    setLogedIn(false)
  }

  return (
    <>
      <header>
        <Link to="/">
          <h1>What To See?</h1>
        </Link>
        <section id="sideheader">
          <Link to="/">
            <h3>
              <BiMoviePlay /> Hva skal jeg se?
            </h3>
          </Link>
          <Link to="/Sjanger">
            <h3>Bla gjennom sjangere</h3>
          </Link>
          <section id="user">
            <h3>
              <FaUserCircle /> {mainUser.user}
            </h3>
            <button onClick={handleClick}>Logg ut</button>
          </section>
        </section>
      </header>
    </>
  )
}
