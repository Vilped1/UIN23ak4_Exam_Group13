import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Genres from "./components/Genres";
import UserCompare from "./components/UserCompare";
import OneGenre from "./components/OneGenre";
import MovieCard from "./components/MovieCard"; 
import { FetchUser, FetchUserFavorites } from "../sanity/services/userServices";
import { fetchGenres } from "../sanity/services/genreServices"; 

export default function App() {
  const [content, setContent] = useState(null); // innhold
  const [users, setUsers] = useState([]); // brukere
  const [compareUser, setCompareUser] = useState(null); // bruker sammenligning
  const [activeUser, setActiveUser] = useState(null); // aktiv bruker
  const [favoriteMovies, setFavoriteMovies] = useState([]); // favorittfilmer
  const [favoriteGenres, setFavoriteGenres] = useState([]); // favorittsjangere
  const navigate = useNavigate(); // Opprettet navigasjonsfunksjon

  // Henter brukere ved oppstart
  useEffect(() => {
    FetchUser().then((data) => {
      setUsers(data); // Setter brukerliste
    });
  }, []);

  const handleUserClick = async (user) => {
    setActiveUser(user.user); // Velg bruker
    const userFavorites = await FetchUserFavorites(user.user); // Henter brukerens favorittfilmer
    setFavoriteMovies(userFavorites[0].favoriteMovies); // Oppdater favorittfilmer
    const userGenres = await fetchGenres(); // Henter brukerens favorittsjangere
    setFavoriteGenres(userGenres); // Oppdater favorittsjangere
    navigate(`/movicard/${user.user}`); // Naviger til MovieCard
  };

  return (
    <>
      <Layout activeUser={activeUser}>
        <Routes>
          <Route path="/Sjanger" element={<Genres content={content} setContent={setContent} />} />
          <Route
            path="/movicard/:user"
            element={<MovieCard activeUser={activeUser} favoriteMovies={favoriteMovies} favoriteGenres={favoriteGenres} />} 
          />
        </Routes>
      </Layout>

      {!activeUser && ( // Viser brukerliste kun hvis ingen bruker er aktiv
        <div>
          <h1>Brukere</h1>
          {users.map((user) => (
            <button key={user._id} onClick={() => handleUserClick(user)}>
              {user.user}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
