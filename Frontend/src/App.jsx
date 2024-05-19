import { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard"
import Nav from "./components/Nav"
import "./App.css"
import GenreSection from "./components/GenreSection"
import FetchAllUsers from "../sanity/services/userService"
// import Login from "./components/Login"

export default function App() {
  const [allUsers, setAllUsers] = useState([])
  const [mainUser, setMainUser] = useState("f0fc50da-74b9-40a8-91bd-7fa8ed61383a")
  console.log(mainUser)

  //Henter alle brukere
  const getAllUsers = async () => {
    const data = await FetchAllUsers()
    setAllUsers(data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  //

  return (
    <>
      <h1>Hei user...!</h1>
      <h2>Filmer jeg skal se</h2>
      <h3>Disse filmene ligger i ønskelisten min:</h3>
      <h2>Jeg skal se sammen med...</h2>
      {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
    </>
  )
}
