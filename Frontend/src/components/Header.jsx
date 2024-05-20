import { Link } from "react-router-dom"
import { BiMoviePlay } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"


export default function Header() {

    return (
        <>
        <header>
            <Link to="/"><h1>What To See?</h1></Link>
            <section id="sideheader">
                <Link to="/"><h3><BiMoviePlay />  Hva skal jeg se?</h3></Link>
                <Link to="/Sjanger"><h3>Bla gjennom sjangere</h3></Link>
                <h3><FaUserCircle /> {localStorage.getItem("user")}</h3>
            </section>
        </header>        
        </>
    )
}