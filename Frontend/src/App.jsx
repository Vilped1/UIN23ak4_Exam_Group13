import { useState, useEffect } from "react"
import { Route, Routes, useParams } from "react-router-dom"
import "./App.css"
import { fetchGenres } from "../sanity/services/genreServices"
import { FetchUser } from "../sanity/services/userServices"
import { fetchMovies } from "../sanity/services/movieServices"
import MovieCard from "./components/MovieCard"

export default function App({ movieCard, setMovieCard }) {
  const [content, setContent] = useState(null)
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  // const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres/"
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
  //     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  //   },
  // }

  // const getGenres = async () => {
  //   try {
  //     const response = await fetch(url, options)
  //     const data = await response.json()
  //     setContent(data.results)
  //     console.log(data.results)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    getGenres()
    fetchGenres().then((data) => {
      console.log(data)
    })
  }, [])

  const [movie, setMovie] = useState([])
  const { slug } = useParams()

  const getMovies = async () => {
    try {
      const data = await fetchMovies()
      setMovie(data)
      // console.log("App movie fetch", data)
    } catch {
      console.error("getMovies fetch fungerte ikke")
    }
  }

  useEffect(() => {
    getMovies()
    fetchMovies().then((what) => {
      // console.log("FETCHMOVIES", what)
    })
  }, [])
  // console.log("useEffect:", movie)


  return (
    <>
      <Routes>
        <Route path="/" element={<MovieCard movieCard={movieCard} setMovieCard={setMovieCard} />} />
      </Routes>
      {/* <main>
        <h2>Tittel: {movie[0]?.movietitle}</h2>
      </main> */}
    </>
  )
}
