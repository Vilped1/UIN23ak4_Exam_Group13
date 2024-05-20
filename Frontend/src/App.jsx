import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import "./App.css";
import GenreSection from "./components/GenreSection";
import FetchAllUsers from "../sanity/services/userService";
import UserCompare from "./components/UserCompare";
import { fetchAllGenres } from "../sanity/services/genreServices";
import fetchMovies from "../sanity/services/movieServices";
import Login from "./components/Login";
import Home from "./components/Home";  
import Layout from "./components/Layout";
import GenreList from "./components/GenreList";
import Genre from "./components/Genre";

export default function App() {
  const [logedIn, setLogedIn] = useState(() => {
    const data = localStorage.getItem("logedIn")
    const logedInData = JSON.parse(data)
    return logedInData || ""
  })

  const [allGenres, setAllGenres] = useState([])
  const [genre, setGenre] = useState([])

  const [movies, setMovies] = useState([])
  const [apiMovies, setApiMovies] = useState([])
  // console.log("apiMovies", apiMovies)

  const [allUsers, setAllUsers] = useState([])
  console.log("Alle brukere", allUsers)
  const [mainUser, setMainUser] = useState({})
  // () => {
    // const data = localStorage.getItem("users")
    // const userdata = JSON.parse(data)
    // return userdata || ""
  
  //USER 2
  const [compareUser, setCompareUser] = useState({
    _id: "f0fc50da-74b9-40a8-91bd-7fa8ed61383a",
    user: "Jesper",
    favoriteMovies: ["The Flash", "Abraham Lincoln Vampire Slayer"],
    favoriteGenres: null,
  })

  const fetchApiMovie = async (movieID) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/${movieID}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log("API fetch", result.results)
  } catch (error) {
    console.error(error)
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
    fetchApiMovie(movies[0]?.imdbid)
  } , [movies] )  

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
    <Layout logedIn={logedIn} setLogedIn={setLogedIn} mainUser={mainUser} >
      <Routes>
        <Route path="/" element={<Home mainUser={mainUser} />} />
        <Route path="/Logg-inn" element={<Login allUsers={allUsers} mainUser={mainUser} setMainUser={setMainUser} setLogedIn={setLogedIn} />} />
        <Route path="/Bruker-sammenlignet-med/:slug" element={<UserCompare />} />
        <Route path="/Sjanger" element={<GenreList allGenres={allGenres}  />} />
        <Route path="/Sjanger/:slug" element={<Genre />} />
      </Routes>
    </Layout>
    {!logedIn ? <Navigate to="Logg-inn" replace /> : <Navigate to="/" replace />}
    </>
  )
}
