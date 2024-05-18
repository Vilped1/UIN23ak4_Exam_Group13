import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Genres from "./components/Genres";
import UserCompare from "./components/UserCompare";
import OneGenre from "./components/OneGenre";
import MovieCard from "./components/MovieCard"; // Importer den kombinerte MovieCard-komponenten
import { FetchUser } from "../sanity/services/userServices";
import { fetchUserFavoritesAndGenres } from "../sanity/services/genreServices"; // Importer fetchUserFavoritesAndGenres

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

  // Håndterer klikk på brukerknapper
  const handleUserClick = async (user) => {
    setActiveUser(user.user); // Velg bruker
    const userData = await fetchUserFavoritesAndGenres(user.user); // Henter brukerens favorittfilmer og sjangere
    setFavoriteMovies(userData.favoriteMovies); // Oppdater favorittfilmer
    setFavoriteGenres(userData.favoriteGenres); // Oppdater favorittsjangere
    navigate(`/movicard/${user.user}`); // Naviger til MovieCard for den valgte brukeren
  };

  return (
    <>
      <Layout activeUser={activeUser}>
        <Routes>
          <Route
            path="/movicard/:user"
            element={<MovieCard activeUser={activeUser} favoriteMovies={favoriteMovies} favoriteGenres={favoriteGenres} />} // Sender data som props
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
