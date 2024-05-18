import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom"; // La til useNavigate for navigasjon
import Layout from "./components/Layout";
import Home from "./components/Home";
import Genres from "./components/Genres";
import UserCompare from "./components/UserCompare";
import OneGenre from "./components/OneGenre";
import FrontPage from "./components/FrontPage"; // La til FrontPage-komponenten
import { FetchUser, FetchUserFavorites } from "../sanity/services/userServices";

export default function App() {
  const [content, setContent] = useState(null);
  const [users, setUsers] = useState([]);
  const [compareUser, setCompareUser] = useState(null);
  const [activeUser, setActiveUser] = useState(null); // Endret til null for å indikere at ingen bruker er valgt først
  const [favoriteMovies, setFavoriteMovies] = useState([]); // favorittfilmer
  const navigate = useNavigate(); // Opprettet navigasjonsfunksjon

  useEffect(() => {
    FetchUser().then((data) => {
      setUsers(data); // Henter brukerliste ved oppstart
    });
  }, []);

  const handleUserClick = async (user) => {
    setActiveUser(user.user); // Velg bruker 
    const userFavorites = await FetchUserFavorites(user.user); // Henter brukerens favorittfilmer
    setFavoriteMovies(userFavorites[0].favoriteMovies); //  favorittfilmer
    navigate(`/frontpage/${user.user}`); // Navigerer til FrontPage for den valgte brukeren
  };

  return (
    <>
      <Layout activeUser={activeUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Bruker-sammenlignet-med/:slug"
            element={
              <UserCompare
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                users={users}
                setUsers={setUsers}
                compareUser={compareUser}
                setCompareUser={setCompareUser}
              />
            }
          />
          <Route path="/Sjanger" element={<Genres content={content} setContent={setContent} />} />
          <Route path="/Sjanger/:slug" element={<OneGenre />} />
          <Route
            path="/frontpage/:user"
            element={<FrontPage activeUser={activeUser} favoriteMovies={favoriteMovies} />} // La til ruten for FrontPage
          />
        </Routes>
      </Layout>

      {!activeUser && ( // Viser brukerliste kun hvis ingen bruker er aktiv, ish 
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
