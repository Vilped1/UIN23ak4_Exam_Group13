import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import MovieCard from "./components/MovieCard"
import "./App.css"
import GenreSection from "./components/GenreSection"
import FetchAllUsers from "../sanity/services/userService"
import UserCompare from "./components/UserCompare"
import { fetchAllGenres } from "../sanity/services/genreServices"
import fetchMovies from "../sanity/services/movieServices"
import Login from "./components/Login"
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
  const [genre, setGenre] = useState([])

  // MOVIES
  const [movies, setMovies] = useState([])
  const [apiMovies, setApiMovies] = useState([])
  const [matchedMovies, setMatchedMovies] = useState([])

  const [allUsers, setAllUsers] = useState([])
  // USER 1
  const [mainUser, setMainUser] = useState({
    _id: "badbfdda-8fef-4646-bc8b-3989b8e9e5c9",
    user: "Erik",
    favoriteMovies: ["The Flash", "Black Widow", "Godzilla", "Godzilla vs Kong"],
    favoriteGenres: null,
  })

  // USER 2
  const [compareUser, setCompareUser] = useState({
    _id: "f0fc50da-74b9-40a8-91bd-7fa8ed61383a",
    user: "Jesper",
    favoriteMovies: [
      {
        movietitle: "The Flash",
        imdbid: "tt0439572",
      },
      {
        movietitle: "Hannah Montana: The Movie",
        imdbid: "tt1114677",
      },
    ],
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

  useEffect(() => {
    getAllUsers()
    getAllGenres()
    getAllMovies()
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
      {apiMovies
        ?.filter((movie) => movie?.id === compareUser?.favoriteMovies[0].imdbid)
        .map((movie) => (
          <div>
            <h1>{movie.titleText.text}</h1>
            <img src={movie.primaryImage.url} alt={movie.titleText.text} />
          </div>
        ))}

      {/* <Layout logedIn={logedIn} setLogedIn={setLogedIn} mainUser={mainUser} >
    <Layout logedIn={logedIn} setLogedIn={setLogedIn} mainUser={mainUser} >
      <Routes>
        <Route path="/" element={<Home mainUser={mainUser} />} />
        <Route path="/Logg-inn" element={<Login allUsers={allUsers} mainUser={mainUser} setMainUser={setMainUser} setLogedIn={setLogedIn} />} />
        <Route path="/Bruker-sammenlignet-med/:slug" element={<UserCompare />} />
        <Route path="/Sjanger" element={<GenreList allGenres={allGenres}  />} />
        <Route path="/Sjanger/:slug" element={<Genre />} />
      </Routes>
    </Layout>
    {/* {!logedIn ? <Navigate to="Logg-inn" replace /> : <Navigate to="/" replace />} */}
    </>
  )
}
