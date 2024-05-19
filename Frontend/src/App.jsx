import { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard"
import Nav from "./components/Nav"
import "./App.css"
import GenreSection from "./components/GenreSection"
import FetchAllUsers from "../sanity/services/userService"
import Login from "./components/Login"

export default function App() {
  const [allUsers, setAllUsers] = useState([])
  const [mainUser, setMainUser] = useState(null)
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
      <Login allUsers={allUsers} setMainUser={setMainUser} />
    </>
  )
}
