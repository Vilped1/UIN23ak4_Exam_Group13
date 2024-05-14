import { useState, useEffect } from "react"
import React from "react"
import MovieCard from "./components/MovieCard"
// import "./App.css"
import User from "./components/UserCompare"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Genres from "./components/Genres"
import UserCompare from "./components/UserCompare"
import OneGenre from "./components/OneGenre"
import { FetchUser, FetchUserFavorites } from "../sanity/services/userServices"

export default function App() {
  // Tilstandshåndtering for appen
  const [content, setContent] = useState(null);
  const [users, setUsers] = useState([]);
  const [compareUser, setCompareUser] = useState(null);
  const [activeUser, setActiveUser] = useState("Thor");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Hent brukerliste når komponenten laster
  useEffect(() => {
    FetchUser().then((data) => {
      setUsers(data);
    });
  }, []);

  //  klikk på en bruker for å hente og vise favorittfilmer
  const handleUserClick = async (user) => {
    setActiveUser(user.user);
    const userFavorites = await FetchUserFavorites(user.user);
    setFavoriteMovies(userFavorites[0].favoriteMovies);
  };

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/Bruker-sammenlignet-med/:slug" 
            element={<UserCompare 
                        activeUser={activeUser} 
                        setActiveUser={setActiveUser} 
                        users={users} 
                        setUsers={setUsers} 
                        compareUser={compareUser} 
                        setCompareUser={setCompareUser} />} 
          />
          <Route path="/Sjanger" element={<Genres content={content} setContent={setContent} />} />
          <Route path="/Sjanger/:slug" element={<OneGenre />} />
        </Routes>
      </Layout>

      {/*  liste over brukere */}
      <h1>Brukere</h1>
      {users.map((user) => (
        <button key={user._id} onClick={() => handleUserClick(user)}>
          {user.user}
        </button>
      ))}

      {/*  favorittfilmer for valgt bruker */}
      {activeUser && (
        <>
          <h2>{activeUser}'s favorittfilmer</h2>
          <div className="movie-list">
            {favoriteMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
