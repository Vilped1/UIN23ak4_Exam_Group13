import { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard"
import Nav from "./components/Nav"
import "./App.css"
import GenreSection from "./components/GenreSection"
import FetchAllUsers from "../sanity/services/userService"
// import Login from "./components/Login"
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

  const handleClick = (e) => {
    setMainUser(e)
  }

  return (
    <>
      <h1>Hvem skal se i dag?</h1>
      <p>Velg bruker</p>
      {allUsers?.map((user) => (
        <button key={user._id} onClick={() => handleClick(user)}>
          {user.user}
        </button>
      ))}
    </>
  )
}
