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
  const [content, setContent] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [compareUser, setCompareUser] = useState("Vilde")
  const [activeUser, setActiveUser] = useState("Thor")
  const [userFavorites, setUserFavorites] = useState([])
  const [compareUserFavorites, setCompareUserFavorites] = useState([])
  const [commonFavorites, setCommonFavorites] = useState([])

  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  //Henter alle brukere
  const getUsers = async () => {
    const data = await FetchAllUsers()
    setAllUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    filterSingleUser(activeUser).then((data) => setUserFavorites(data.favoriteMovies))
    filterSingleUser(compareUser).then((data) => setCompareUserFavorites(data.favoriteMovies))
    compareUsers()
  }, [activeUser, compareUser])

  //Filterer ut en enkelt bruker
  const filterSingleUser = async (user) => {
    const userObject = allUsers.find((u) => (u.user = user))
    console.log(user, userObject.favoriteMovies)
    return userObject
  }

  //Sammenligner to brukeres favorittfilmer og logger ut de som er like
  const compareUsers = async () => {
    const commonFavorites = await userFavorites.filter((movie) => compareUserFavorites.includes(movie))
    console.log("Common", commonFavorites)
    setCommonFavorites(commonFavorites)
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bruker-sammenlignet-med/:slug" element={<UserCompare activeUser={activeUser} setActiveUser={setActiveUser} allUsers={allUsers} setAllUsers={setAllUsers} compareUser={compareUser} setCompareUser={setCompareUser} commonFavorites={commonFavorites} />} />
          <Route path="/Sjanger" element={<Genres content={content} setContent={setContent} />} />
          <Route path="/Sjanger/:slug" element={<OneGenre />} />
        </Routes>
      </Layout>
    </>
  )
}
