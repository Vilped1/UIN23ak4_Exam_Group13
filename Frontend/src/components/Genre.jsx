//Importerer React Hooks
import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"

//Tar imot props fra App.jsx
export default function Genre({ apiMovies, movies, genre }) {

  //Lagd useState for p skrivce ut filter-funksjonen. ([]) vil se den er array
  const [movieByGenre, setMovieByGenre] = useState([])
  //Opprettet async funksjon for å filtrere og hente ut riktig sjanger når den blir valgt
  const filterMoviesByGenre = async (genre) => {
    //Filtrerer movies array til å skrive ut en spesifik sjanger
    const filterByGenre = await movies?.filter((movie) => movie?.genre === genre?.genre)
    setMovieByGenre(filterByGenre)
  }

  //UseEffect for å skrive ut innholdet i funksjonen filterMoviesByGenre(genre)
  useEffect(() => {
    filterMoviesByGenre(genre)
    console.log("fg", genre)
    //Oppdaterer useEffect basert på når genre blir oppdatert
  }, [genre])

  //HTML-struktur som rendres på siden med tagger for enkel sass koding
  return (
    <>
      <section>
        <h2>sjangeren</h2>
        {/* Filtrerer apiMovies array for å rendre MovieCards til sjangersiden
        Bruker .some for å sammenling key i objekter fra array movieByGenre 
        Movie er en parameter vi bruker for å velge sepsifike elementer  */}
        {apiMovies
          ?.filter((movie) => movieByGenre?.some((genreMovie) => genreMovie.imdbid === movie.id))
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </section>
    </>
  )
}
