import { Link } from "react-router-dom"; // Importerer Link for navigering
import { BiMoviePlay } from "react-icons/bi"; // Importerer film-ikon
import { FaUserCircle } from "react-icons/fa"; // Importerer bruker-ikon

export default function Header({ activeUser, setActiveUser }) {
 

  return (
    <header>
      <Link to="/"><h2>What To See?</h2></Link> {/* Link til hovedsiden */}
      <section id="sideheader">
        <Link to="/"><h3><BiMoviePlay /> Hva skal jeg se?</h3></Link> {/* Link til hovedsiden*/}
        <Link to="/Sjanger"><h3>Bla gjennom sjangere</h3></Link> {/* Link til sjangersiden */}
        <h3>{activeUser ? `Valgt bruker: ${activeUser}` : "Ingen bruker valgt"}</h3> {/* Viser valgt bruker*/}
        {activeUser && ( // Knapp for å sammenligne brukere
          <Link to="/">
            <h3>Sammenlign filmer med andre brukere</h3>
          </Link>
        )}
       
      </section>
    </header>
  );
}
