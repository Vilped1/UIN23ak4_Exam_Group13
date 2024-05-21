//Importerer hooks
import { useState, useEffect } from "react"
//Importerer React Router for rammeverket av nettsiden og for å rendre flere komponenter på samme side
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
//Importerer sanity servicec og componenter
import FetchAllUsers from "../sanity/services/userService"
import { fetchAllGenres } from "../sanity/services/genreServices"
import fetchMovies from "../sanity/services/movieServices"
import UserCompare from "./components/UserCompare"
import Login from "./components/Login"
import Home from "./components/Home"
import Layout from "./components/Layout"
import GenreList from "./components/GenreList"
import Genre from "./components/Genre"

export default function App() {
  // LOGGED IN
  //Log in state satt til false for at man skal velge bruker når man åpner siden
  const [logedIn, setLogedIn] = useState(false)

  //UseEffect for å oppdatere innhold i sammenheng med logedIn
  useEffect(() => {
    console.log("Logged in state", logedIn)
  }, [logedIn])

  // GENRES
  //Array states for alle sjangere og enkeltsjanger
  const [allGenres, setAllGenres] = useState([])
  const [genre, setGenre] = useState([])

  // MOVIES
  //Array states for filmobjekt fra sanity og filmobjekt fra API fetch
  const [movies, setMovies] = useState([])
  const [apiMovies, setApiMovies] = useState([])

  // USERS
  //Array state for alle brukere i sanity
  const [allUsers, setAllUsers] = useState([])

  // USER 1
  //Objekt state for bruker som er logget inn
  const [mainUser, setMainUser] = useState({})
  console.log("MainUser", mainUser)

  // USER 2
  //Objekt state for sammenligningsbruker
  const [compareUser, setCompareUser] = useState({})

  //Url for å fetch fra API. Bruker movies.map for å dynamisk rendre alle IMDB id far sanity(disse er lik som id i API)
  const url = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${movies.map((movie) => movie.imdbid).join(",")}`
  //Definert metode og header for å kunne fetche fra API
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f97dd82b1amshf8b2c4b90d6a205p1f04a7jsneefafbdfb4fa",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }

  //API fetch som bruker async og await for å oppdatere data riktig rekkefølge. Bruker try og catch for å få feilmedning hvis fetch ikke funker
  const fetchApiMovie = async () => {
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setApiMovies(result.results)
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }

  //Async arrow function for å hente array fra sanity bruker fetch og sende data til allUser og wishList
  const getAllUsers = async () => {
    const data = await FetchAllUsers()
    setAllUsers(data)
    setWishList(data)
  }

  //Kjører statene med useEffect
  useEffect(() => {
    getAllUsers()
    getAllGenres()
    getAllMovies()
  }, [])

  //Kjører api fetch i sammenheng med movies
  useEffect(() => {
    fetchApiMovie()
  }, [movies])

  //Async arrow function for å hente array fra sanity bruker fetch og sende data til alle sjangere
  const getAllGenres = async () => {
    const data = await fetchAllGenres()
    setAllGenres(data)
  }

  //Async arrow function for å hente array fra sanity bruker fetch og sende data til movies 
  const getAllMovies = async () => {
    const data = await fetchMovies()
    setMovies(data)
  }

  return (
    <>
      {/* bruker betinget logikk for å kun rendre siden når en innlogget bruker er valgt */}
      {logedIn ? (
        <Layout setLogedIn={setLogedIn} logedIn={logedIn} setMainUser={setMainUser} setCompareUser={setCompareUser} mainUser={mainUser}>
          {/* Bruker Layout for struktur av UI-elementer på siden. Lager en ramme til komponentene */}
          <Routes>
            {/* Bruker Route for å bestemme url tekst og og når siden endres til å vise andre komponenter. Sender og med alle props de forskjellige komponentene trenger */}
            <Route path="/" element={<Home allUsers={allUsers} mainUser={mainUser} compareUser={compareUser} setCompareUser={setCompareUser} apiMovies={apiMovies} />} />
            <Route path="/Logg-inn" element={<Login allUsers={allUsers} mainUser={mainUser} setMainUser={setMainUser} setLogedIn={setLogedIn} />} />
            <Route path="/Bruker-sammenligning" element={<UserCompare apiMovies={apiMovies} mainUser={mainUser} compareUser={compareUser} />} />
            <Route path="/Sjanger" element={<GenreList allGenres={allGenres} setGenre={setGenre} />} />
            <Route path="/Sjanger/:slug" element={<Genre apiMovies={apiMovies} mainUser={mainUser} allGenres={allGenres} movies={movies} setMovies={setMovies} genre={genre} />} />
          </Routes>
        </Layout>
      ) : (
        <Login
          allUsers={allUsers}
          mainUser={mainUser}
          setMainUser={setMainUser}
          setLogedIn={setLogedIn}
        />
      )}
      {/* Etter : er det som vises når ingen bruker er valgt. En liste med brukere som kan velges */}
    </>
  )
}
