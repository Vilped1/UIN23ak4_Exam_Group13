import React, { useState, useEffect } from "react"
import "./App.css"
import { fetchGenres } from "../sanity/services/genreServices"
import { FetchUser } from "../sanity/services/userServices"
import UserCompare from "./components/UserCompare"

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
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/Bruker-sammenlignet-med/:slug" element={<UserCompare />} />
    //     <Route path="/Sjanger/:slug" element={<Genres content={content} setContent={setContent} />} />
    //   </Routes>
    // </Layout>
    <>
      {/* <Genres content={content} setContent={setContent} /> */}
      <UserCompare
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        users={users}
        setUsers={setUsers}
        compareUser={compareUser}
        setCompareUser={setCompareUser}
      />
    </>
  )
}
