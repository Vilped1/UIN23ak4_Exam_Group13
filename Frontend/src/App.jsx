  import { useState, useEffect } from "react";
  import React from "react";
  import { Route, Routes, useNavigate } from "react-router-dom";
  import Layout from "./components/Layout";
  import Home from "./components/Home";
  import Genres from "./components/Genres";
  import UserCompare from "./components/UserCompare";
  import OneGenre from "./components/OneGenre";
  import FrontPage from "./components/FrontPage";
  import { FetchUser, FetchUserFavorites } from "../sanity/services/userServices";

export default function App() {

  const [content, setContent] = useState(null); 
  const [users, setUsers] = useState([]); 
  const [compareUser, setCompareUser] = useState(null); 
  const [activeUser, setActiveUser] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]); 
  const navigate = useNavigate(); // Navigasjonsfunksjon

  // Hent brukerliste
  useEffect(() => {
    FetchUser().then((data) => {
      setUsers(data);
    });
  }, []);

  // Klikk på en bruker for å hente og vise favorittfilmer
  const handleUserClick = async (user) => {
    setActiveUser(user.user); // aktiv bruker
    const userFavorites = await FetchUserFavorites(user.user); // Henter favorittfilmer
    setFavoriteMovies(userFavorites[0].favoriteMovies); // 
    navigate(`/frontpage/${user.user}`); // Naviger til frontpage for den valgte brukeren. 
  };

  return (
    <>
      <Layout activeUser={activeUser}>
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
          <Route 
            path="/frontpage/:user" 
            element={<FrontPage activeUser={activeUser} favoriteMovies={favoriteMovies} />} 
          />
        </Routes>
      </Layout>

      {/* Liste over brukere - skjules hvis en bruker er valgt  */}
      {!activeUser && (
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
