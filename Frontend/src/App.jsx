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
  const [content, setContent] = useState(null)
  const [users, setUsers] = useState([])
  const [compareUser, setCompareUser] = useState(null)
  const [activeUser, setActiveUser] = useState("Thor")

  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d1

  useEffect(() => {
    FetchUser().then((data) => {
      setUsers(data)
    })
    FetchUserFavorites("Erik").then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bruker-sammenlignet-med/:slug" element={<UserCompare activeUser={activeUser} setActiveUser={setActiveUser} users={users} setUsers={setUsers} compareUser={compareUser} setCompareUser={setCompareUser} />} />
          <Route path="/Sjanger" element={<Genres content={content} setContent={setContent} />} />
          <Route path="/Sjanger/:slug" element={<OneGenre />} />
        </Routes>
      </Layout>

      <h1>Brukere</h1>
      {users.map((user) => (
        <button key={user._id}>{user.user}</button>
      ))}
    </>
  )
}
