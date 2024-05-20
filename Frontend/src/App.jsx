import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
import "./App.css";
import GenreSection from "./components/GenreSection";
import FetchAllUsers from "../sanity/services/userService";
import UserCompare from "./components/UserCompare";
import { fetchAllGenres } from "../sanity/services/genreServices";
import fetchMovies from "../sanity/services/movieServices";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  const [allGenres, setAllGenres] = useState([]);
  const [genre, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [matchingMovies, setMatchingMovies] = useState([]);
  const [mainUser, setMainUser] = useState({
    //USER 1
    _id: "badbfdda-8fef-4646-bc8b-3989b8e9e5c9",
    user: "Erik",
    favoriteMovies: [
      {
        movietitle: "The Flash",
        imdbid: "tt3107288",
      },
      {
        movietitle: "Scarlett Piss Princess",
        imdbid: "tt1611224",
      },
    ],
    favoriteGenres: null,
  });
  //USER 2
  const [compareUser, setCompareUser] = useState({
    _id: "f0fc50da-74b9-40a8-91bd-7fa8ed61383a",
    user: "Jesper",
    favoriteMovies: [
      {
        movietitle: "The Flash",
        imdbid: "tt3107288",
      },
      {
        movietitle: "Abraham Lincoln Vampire Slayer",
        imdbid: "tt1611224",
      },
    ],
    favoriteGenres: null,
  });

  useEffect(() => {
    const matchingMovies = mainUser.favoriteMovies.filter((mainUserMovies) =>
      compareUser.favoriteMovies.some(
        (compareUserMovies) =>
          compareUserMovies.imdbid === mainUserMovies.imdbid
      )
    );
    setMatchingMovies(matchingMovies);
  }, []);

  const url = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${matchingMovies
    .map((movie) => movie.imdbid)
    .join(",")}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const fetchApiMovie = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("API FETCH RESULTS", result.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllUsers = async () => {
    const data = await FetchAllUsers();
    setAllUsers(data);
  };

  useEffect(() => {
    getAllUsers();
    getAllGenres();
    getAllMovies();
  }, []);

  useEffect(() => {
    fetchApiMovie();
  }, [movies]);

  const getAllGenres = async () => {
    const data = await fetchAllGenres();
    setAllGenres(data);
  };

  const getAllMovies = async () => {
    const data = await fetchMovies();
    setMovies(data);
    /* console.log("MOVIES DATA", data); */
  };

  return (
    /* {movies?.map((movie, index) => (
        <div key={index}>
          <h2>{movie.movietitle}</h2>
           <p>{movie.imdbid}</p>
           </div> */

    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login allUsers={allUsers} setMainUser={setMainUser} />}
        />
        <Route path="/home" element={<Home mainUser={mainUser} />} />
        {/* Route til valgt bruker*/}
      </Routes>
    </Router>
  );
}
