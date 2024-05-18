import { useState, useEffect } from "react"
import React from "react"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Genres from "./components/Genres"
import UserCompare from "./components/UserCompare"
import OneGenre from "./components/OneGenre"
import { FetchAllUsers } from "../sanity/services/userServices"

export default function App() {
  const [allUsers, setAllUsers] = useState([])
  const [user1, setUser1] = useState("Thor")
  const [user2, setUser2] = useState("Erik")
  const [user1Favorites, setUser1Favorites] = useState([])
  const [user2Favorites, setUser2Favorites] = useState([])
  const [commonFavorites, setCommonFavorites] = useState([])
  console.log("Common", commonFavorites)

  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  //Henter alle brukere
  const getAllUsers = async () => {
    const users = await FetchAllUsers()
    console.log(users)
    setAllUsers(users)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  //Filtrer ut enkelte brukeres favorittfilmer
  const filterUserFavorites = (selectedUser) => {
    const userData = allUsers.filter((user) => user.user === selectedUser)
    console.log(selectedUser, userData)
    return userData.map((user) => user.favoriteMovies).flat()
  }

  useEffect(() => {
    setUser1Favorites(filterUserFavorites(user1))
    setUser2Favorites(filterUserFavorites(user2))
  }, [user1, user2])

  //Finner felles favorittfilmer
  useEffect(() => {
    const common = user1Favorites.filter((movie) => user2Favorites.includes(movie))
    setCommonFavorites(common)
  }, [user1Favorites, user2Favorites])

  // Håndterer klikk på brukerknapper
  const handleUserClick = async (user) => {
    setUser1(user.user) // Velg bruker
    const userData = await fetchUserFavoritesAndGenres(user.user) // Henter brukerens favorittfilmer og sjangere
    setFavoriteMovies(userData.favoriteMovies) // Oppdater favorittfilmer
    setFavoriteGenres(userData.favoriteGenres) // Oppdater favorittsjangere
    navigate(`/movicard/${user.user}`) // Naviger til MovieCard for den valgte brukeren
  }

  return (
    <>
      <Layout user1={user1}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/:user"
            element={<Users user1={user1} favoriteMovies={favoriteMovies} favoriteGenres={favoriteGenres} />} // Sender data som props
          /> */}
        </Routes>
      </Layout>

      {!user1 && ( // Viser brukerliste kun hvis ingen bruker er aktiv
        <div>
          <h1>Brukere</h1>
          {allUsers.map((user) => (
            <button key={user._id} onClick={() => handleUserClick(user)}>
              {user.user}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
