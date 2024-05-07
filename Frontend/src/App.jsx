import React, { useState, useEffect } from "react"
import "./App.css"
import { fetchGenres } from "../sanity/services/genreServices"
import { FetchUser } from "../sanity/services/userServices"
import UserCompare from "./components/UserCompare"
import OneGenre from "./components/OneGenre"

export default function App() {
  const [content, setContent] = useState(null)
  const [users, setUsers] = useState([])
  const [compareUser, setCompareUser] = useState(null)
  const [activeUser, setActiveUser] = useState(null)

  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d1

  useEffect(() => {
    FetchUser().then((data) => {
      setUsers(data)
    })
  }, [])

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              user={user}
              setUser={setUser}
              compareUser={compareUser}
              setCompareUser={setCompareUser}
            />
          }
        />
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
        <Route
          path="/Sjanger"
          element={<Genres content={content} setContent={setContent} />}
        />
        <Route path="/Sjanger/:slug" element={<OneGenre />} />
      </Routes>
    </Layout>
  )
}
