<<<<<<< HEAD
import { useState } from "react"
import { useNavigate } from "react-router-dom"
=======
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> f816962214abf437d03dca2e7e15d162b0484e1d

export default function Login({ allUsers, mainUser, setMainUser, setLogedIn }) {
  const navigate = useNavigate()

  const handleClick = (user) => {
    const found = allUsers.find((element) => element._id === mainUser._id)
    setMainUser(user)

    if (found) {
      navigate("/")
      setLogedIn(true)
      localStorage.setItem("user", user.user)
    }
    console.log("Funnet", found)
    console.log("MAINUSER", mainUser)
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
