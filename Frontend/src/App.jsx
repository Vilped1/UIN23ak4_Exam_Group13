import { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard"
import Nav from "./components/Nav"
import "./App.css"
import GenreSection from "./components/GenreSection"
import FetchAllUsers from "../sanity/services/userService"

export default function App() {
  const [allUsers, setAllUsers] = useState([])
  const [mainUser, setMainUser] = useState(null)
  console.log(mainUser)

  const getAllUsers = async () => {
    const data = await FetchAllUsers()
    setAllUsers(data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    setMainUser(e)
  }

  return (
    <>
      <h1>Hvem skal se i dag?</h1>
      <p>Velg bruker</p>
      {allUsers?.map((user) => (
        <button key={user._id} onClick={handleClick(user._id)}>
          {user.user}
        </button>
      ))}
    </>
  )
}
