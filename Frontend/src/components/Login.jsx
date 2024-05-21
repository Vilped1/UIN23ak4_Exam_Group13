import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Login({ allUsers, mainUser, setMainUser, setLogedIn }) {
  const handleClick = (user) => {
    setMainUser(user)
    console.log("MAINUSER", mainUser)
    setLogedIn(true)
  }

  return (
    <>
      <div id="logginn">
        <h1>Hvem skal se i dag?</h1>
        <p>Velg bruker</p>
        {allUsers?.map((user) => (
          <button key={user._id}>
            <Link to="/" onClick={() => handleClick(user)}>
              {user.user}
            </Link>
          </button>
        ))}
      </div>
    </>
  )
}
