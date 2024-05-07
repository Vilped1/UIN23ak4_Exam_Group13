import { useState, useEffect } from "react"
import React from "react"
import MovieCard from "./components/MovieCard"
import "./App.css"
import User from "./components/UserCompare"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Genres from "./components/Genres"
import UserCompare from "./components/UserCompare"

function App() {
  const [content, setContent] = useState(null)
  const [user, setUser] = useState(null)
  const [compareUser, setCompareUser] = useState(null)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Bruker-sammenlignet-med/:slug" element={<UserCompare user={user}
        setUser={setUser}
        compareUser={compareUser}
        setCompareUser={setCompareUser}/>} />
        <Route path="/Sjanger" element={<Genres content={content} setContent={setContent} />} />
        <Route path="/Sjanger/:slug" element={<MovieCard />} />
      </Routes>
    </Layout>
  )
}

export default App
