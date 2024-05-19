import { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard"
import Nav from "./components/Nav"
import "./App.css"
import GenreSection from "./components/GenreSection"
import FetchAllUsers from "../sanity/services/userService"
import UserCompare from "./components/UserCompare"
import { fetchAllGenres } from "../sanity/services/genreServices"
// import Login from "./components/Login"
import fetchMovies from "../sanity/services/movieServices"

export default function App() {
  const [allGenres, setAllGenres] = useState([])
  const [genre, setGenre] = useState([])

  const [movies, setMovies] = useState([])

  const [allUsers, setAllUsers] = useState([])
  const [mainUser, setMainUser] = useState({
    _id: "badbfdda-8fef-4646-bc8b-3989b8e9e5c9",
    user: "Erik",
    favoriteMovies: ["The Flash", "Scarlet Piss Princess"],
    favoriteGenres: null,
  })
  const [compareUser, setCompareUser] = useState({
    _id: "f0fc50da-74b9-40a8-91bd-7fa8ed61383a",
    user: "Jesper",
    favoriteMovies: ["The Flash", "Abraham Lincoln Vampire Slayer"],
    favoriteGenres: null,
  })

  const getAllUsers = async () => {
    const data = await FetchAllUsers()
    setAllUsers(data)
  }

  useEffect(() => {
    getAllUsers()
    getAllGenres()
    getAllMovies()
  }, [])

  const getAllGenres = async () => {
    const data = await fetchAllGenres()
    setAllGenres(data)
  }

  const getAllMovies = async () => {
    const data = await fetchMovies()
    setMovies(data)
  }

  const url = 'https://moviesdatabase.p.rapidapi.com/titles/tt0086250';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f97dd82b1amshf8b2c4b90d6a205p1f04a7jsneefafbdfb4fa',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

  return (
    <>
      <img src="" alt="" />
      <h3></h3>
      <p></p>
      {/* <GenreList/> */}
      {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
      {/* <UserCompare/> */}
    </>
  )
}
