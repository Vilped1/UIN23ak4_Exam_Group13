import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import "./App.css"
import FetchAllUsers from "../sanity/services/userService"
import UserCompare from "./components/UserCompare"
import { fetchAllGenres } from "../sanity/services/genreServices"
import fetchMovies from "../sanity/services/movieServices"
import Login from "./components/Login"
import MovieCard from "./components/MovieCard"
import Home from "./components/Home"
import Layout from "./components/Layout"
import GenreList from "./components/GenreList"
import Genre from "./components/Genre"
import { FaIgloo } from "react-icons/fa"

export default function App() {
  // LOGGED IN
  const [logedIn, setLogedIn] = useState(() => {
    const data = localStorage.getItem("logedIn")
    const logedInData = JSON.parse(data)
    return logedInData || ""
})

  // GENRES
  const [allGenres, setAllGenres] = useState([])
  console.log("Sjanger", allGenres)
  const [genre, setGenre] = useState([])

  // MOVIES
  const [movies, setMovies] = useState([])
  const [apiMovies, setApiMovies] = useState([])
  const [matchedMovies, setMatchedMovies] = useState([])

  const [allUsers, setAllUsers] = useState([])
  console.log("All users", allUsers)
  // USER 1
  const [mainUser, setMainUser] = useState(localStorage.getItem("user"))

  // USER 2
  const [compareUser, setCompareUser] = useState({
    _id: "627fd49e-e35d-4bab-a10f-455cd65bd45b",
    user: "Thor",
    favoriteMovies: ["tt0439572", "tt1114677"],
    favoriteGenres: null,
  })

  const url = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${movies.map((movie) => movie.imdbid).join(",")}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f97dd82b1amshf8b2c4b90d6a205p1f04a7jsneefafbdfb4fa",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }

  const fetchApiMovie = async () => {
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setApiMovies(result.results)
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }

  const getAllUsers = async () => {
    const data = await FetchAllUsers()
    setAllUsers(data)
  }

  // const saveUser = () => {
  //   {allUsers.find((save) => localStorage("userID") === save._id)
  //     // localStorage.setItem("user", )
  //   setMainUser(mainUser)
  // }
  // }

  useEffect(() => {
    getAllUsers()
    getAllGenres()
    getAllMovies()
    // saveUser()
  }, [])

  useEffect(() => {
    fetchApiMovie()
  }, [movies])

  const getAllGenres = async () => {
    const data = await fetchAllGenres()
    setAllGenres(data)
  }

  const getAllMovies = async () => {
    const data = await fetchMovies()
    setMovies(data)
  }

  return (
    <>
      {/* Skriver ut brukerens favoritter med info fra API */}
      {/* {logedIn
        ? apiMovies
            ?.filter((movie) => mainUser.favoriteMovies.some((favMovie) => favMovie === movie.id))
            .map((movie) => (
              <div key={movie.id}>
                <h1>{`${movie.titleText.text} (${movie.releaseYear.year})`}</h1>
                <img src={movie.primaryImage.url} alt={movie.titleText.text} />
              </div>
            ))
        : null} */}
      {/* {logedIn ? apiMovies?.filter((movie) => mainUser.favoriteMovies.some((favMovie) => favMovie === movie.id)).map((movie) => <MovieCard movie={movie} />) : null} */}

      {/*Sammenligner filmer mellom brukere og skriver ut*/}

      <Layout logedIn={logedIn} setLogedIn={setLogedIn} mainUser={mainUser}>
        <Routes>
          <Route path="/" element={<Home allUsers={allUsers} mainUser={mainUser} compareUser={compareUser} setCompareUser={setCompareUser} apiMovies={apiMovies} logedIn={logedIn} />} />
          <Route path="/Logg-inn" element={<Login allUsers={allUsers} mainUser={mainUser} setMainUser={setMainUser} setLogedIn={setLogedIn} />} />
          <Route path="/Bruker-sammenligning" element={<UserCompare apiMovies={apiMovies} mainUser={mainUser} compareUser={compareUser} />} />
          <Route path="/Sjanger" element={<GenreList allGenres={allGenres} />} />
          <Route path="/Sjanger/:slug" element={<Genre />} />
        </Routes>
      </Layout>
      {/* {!logedIn ? <Navigate to="Logg-inn" replace /> : <Navigate to="/" replace />} */}
    </>
  )
}